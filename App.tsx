import React, { useState, useEffect } from 'react';
import { View, Project, Plant } from './types';
import Header from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProjectDetailView from './components/ProjectDetailView';
import PlantDatabaseView from './components/PlantDatabaseView';
import SettingsView from './components/SettingsView';
import { INITIAL_PROJECTS, INITIAL_PLANTS } from './constants';
import ProcurementView from './components/ProcurementView';

const App: React.FC = () => {
  const [view, setView] = useState<View>('DASHBOARD');
  const [projects, setProjects] = useState<Project[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  useEffect(() => {
    const savedProjects = localStorage.getItem('plantree_projects');
    const savedPlants = localStorage.getItem('plantree_plants');
    const savedActiveProject = localStorage.getItem('plantree_activeProject');

    const loadedProjects = savedProjects ? JSON.parse(savedProjects) : INITIAL_PROJECTS;
    setProjects(loadedProjects);
    setPlants(savedPlants ? JSON.parse(savedPlants) : INITIAL_PLANTS);
    
    if (savedActiveProject) {
      setActiveProjectId(savedActiveProject);
    } else if (loadedProjects.length > 0) {
      // Don't set active project on initial load, so dashboard shows list
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('plantree_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('plantree_plants', JSON.stringify(plants));
  }, [plants]);

  useEffect(() => {
    if (activeProjectId) {
      localStorage.setItem('plantree_activeProject', activeProjectId);
    } else {
      localStorage.removeItem('plantree_activeProject');
    }
  }, [activeProjectId]);

  const activeProject = projects.find(p => p.id === activeProjectId) || null;

  const updateProject = (updatedProject: Project) => {
    setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
  };
  
  const addProject = (newProject: Project) => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    setActiveProjectId(newProject.id);
    setView('PROJECT_DETAIL');
  };
  
  const deleteProject = (projectId: string) => {
    const remainingProjects = projects.filter(p => p.id !== projectId);
    setProjects(remainingProjects);
    if(activeProjectId === projectId) {
      setActiveProjectId(null);
      setView('DASHBOARD');
    }
  }

  const updatePlant = (updatedPlant: Plant) => {
    setPlants(plants.map(p => p.id === updatedPlant.id ? updatedPlant : p));
  };

  const addPlant = (newPlant: Plant) => {
    setPlants([...plants, newPlant]);
  };
  
  const deletePlant = (plantId: string) => {
    setPlants(plants.filter(p => p.id !== plantId));
    setProjects(projects.map(proj => {
      const newNodes = proj.nodes.map(node => node.plantId === plantId ? {...node, plantId: null} : node);
      const newProcurementStatus = { ...proj.procurementStatus };
      delete newProcurementStatus[plantId];
      return {
        ...proj,
        nodes: newNodes,
        procurementStatus: newProcurementStatus
      };
    }));
  };

  const handleSelectProject = (projectId: string) => {
    setActiveProjectId(projectId);
    setView('PROJECT_DETAIL');
  };

  const renderView = () => {
    switch (view) {
      case 'DASHBOARD':
        return <Dashboard projects={projects} onSelectProject={handleSelectProject} setView={setView} />;
      case 'PROJECT_DETAIL':
        if (activeProject) {
            return <ProjectDetailView project={activeProject} updateProject={updateProject} plants={plants} />;
        }
        return <NoProjectSelected setView={setView} />;
      case 'PROCUREMENT':
        return <ProcurementView projects={projects} plants={plants} />;
      case 'PLANTS':
        return <PlantDatabaseView plants={plants} addPlant={addPlant} updatePlant={updatePlant} deletePlant={deletePlant} />;
      case 'SETTINGS':
        return <SettingsView projects={projects} activeProjectId={activeProjectId} setActiveProjectId={setActiveProjectId} addProject={addProject} updateProject={updateProject} deleteProject={deleteProject} fullState={{projects, plants, activeProjectId}} setFullState={({projects, plants, activeProjectId}) => {setProjects(projects); setPlants(plants); setActiveProjectId(activeProjectId)}} />;
      default:
        return <Dashboard projects={projects} onSelectProject={handleSelectProject} setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header view={view} setView={setView} />
      <main className="container mx-auto p-6 sm:p-8">
        {renderView()}
      </main>
    </div>
  );
};

const NoProjectSelected: React.FC<{setView: (view: View) => void}> = ({setView}) => (
  <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] bg-surface rounded-lg shadow-md p-8 text-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-text-secondary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 9.243L12 12.586l-5-3.343m0 0A8.001 8.001 0 0112 5v.01M3 8.016v8.468C3 17.886 7.114 22 12 22s9-4.114 9-8.516V8.016M3 8.016L12 3l9 5.016" />
    </svg>
    <h2 className="text-2xl font-semibold text-text-primary mb-2">No Project Selected</h2>
    <p className="text-text-secondary mb-4">Please select a project from the dashboard or create a new one.</p>
    <button onClick={() => setView('DASHBOARD')} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-focus transition-colors shadow">
        Go to Dashboard
    </button>
  </div>
);

export default App;