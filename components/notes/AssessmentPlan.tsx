'use client';

import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import CollapsibleSection from '../common/CollapsibleSection';
import IconButton from '../common/IconButton';
import Button from '../common/Button';
import { 
  MdOutlineThumbUp, 
  MdOutlineThumbDown, 
  MdContentCopy, 
  MdEdit, 
  MdClose, 
  MdCheck,
  MdClearAll
} from "react-icons/md";

interface EditorModalProps {
  initialContent: string;
  onSave: (content: string) => void;
  onCancel: () => void;
}

interface Task {
  id: string;
  text: string;
  checked: boolean;
  originalLine: string;
  lineIndex: number;
}

interface AssessmentPlanData {
  content?: string;
  title?: string;
  defaultOpen?: boolean;
}

interface AssessmentPlanProps {
  data: AssessmentPlanData;
}

const EditorModal: React.FC<EditorModalProps> = ({ initialContent, onSave, onCancel }) => {
  const [modalContent, setModalContent] = useState<string>(initialContent);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  
  useEffect(() => {
    // Focus the textarea when the modal opens
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setModalContent(e.target.value);
  };
  
  const handleSave = (): void => {
    onSave(modalContent);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold">Edit Assessment & Plan</h3>
          <button 
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <MdClose size={24} />
          </button>
        </div>
        
        <textarea
          ref={textareaRef}
          className="flex-grow p-4 w-full focus:outline-none"
          value={modalContent}
          onChange={handleChange}
          style={{ minHeight: '300px', resize: 'none' }}
        />
        
        <div className="p-4 border-t flex justify-end space-x-2">
          <Button 
            variant="secondary" 
            size="small"
            onClick={onCancel}
            className="flex items-center"
          >
            <MdClose className="mr-1" /> Cancel
          </Button>
          <Button 
            variant="primary" 
            size="small"
            onClick={handleSave}
            className="flex items-center"
          >
            <MdCheck className="mr-1" /> Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

interface TaskCheckboxProps {
  task: string;
  checked: boolean;
  onChange: () => void;
}

// Task checkbox component
const TaskCheckbox: React.FC<TaskCheckboxProps> = ({ task, checked, onChange }) => {
  return (
    <div className="flex items-start group my-1">
      <div 
        className={`
          flex-shrink-0 w-5 h-5 mr-2 border rounded cursor-pointer 
          transition-all duration-200 flex items-center justify-center
          group-hover:border-[var(--primary-color)]
          ${checked 
            ? 'bg-[var(--primary-color)] border-[var(--primary-color)] text-white' 
            : 'border-gray-300 bg-white text-transparent'
          }
        `}
        onClick={onChange}
      >
        {checked && <MdCheck size={16} />}
      </div>
      <span 
        className={`flex-grow ${checked ? 'text-gray-500 line-through' : 'text-gray-900'}`}
      >
        {task}
      </span>
    </div>
  );
};

const AssessmentPlan: React.FC<AssessmentPlanProps> = ({ data }) => {
  const [content, setContent] = useState<string>(data?.content || 'No assessment plan available');
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [hideCompleted, setHideCompleted] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  
  // Parse content for tasks and update state
  const parseTasksFromContent = (text: string): void => {
    const lines = text.split('\n');
    const taskList: Task[] = [];
    
    lines.forEach((line, index) => {
      // Check if line starts with [] or [x] pattern
      const uncheckedMatch = line.match(/^\s*\[\s*\]\s*(.+)$/);
      const checkedMatch = line.match(/^\s*\[\s*x\s*\]\s*(.+)$/i);
      
      if (uncheckedMatch) {
        taskList.push({
          id: `task-${index}`,
          text: uncheckedMatch[1],
          checked: false,
          originalLine: line,
          lineIndex: index
        });
      } else if (checkedMatch) {
        taskList.push({
          id: `task-${index}`,
          text: checkedMatch[1],
          checked: true,
          originalLine: line,
          lineIndex: index
        });
      }
    });
    
    setTasks(taskList);
  };
  
  // Update content when data changes
  useEffect(() => {
    if (data?.content) {
      setContent(data.content);
      parseTasksFromContent(data.content);
    }
  }, [data?.content]);
  
  // Focus textarea when editing starts
  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
      // Place cursor at the end of the text
      textareaRef.current.selectionStart = textareaRef.current.value.length;
      textareaRef.current.selectionEnd = textareaRef.current.value.length;
    }
  }, [isEditing]);
  
  // Toggle task completion
  const toggleTask = (taskId: string): void => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    
    setTasks(updatedTasks);
    
    // Update the content with the new task states
    updateContentWithTasks(updatedTasks);
  };
  
  // Update content with current task states
  const updateContentWithTasks = (currentTasks: Task[]): void => {
    const lines = content.split('\n');
    
    currentTasks.forEach(task => {
      const checkboxPrefix = task.checked ? '[x] ' : '[] ';
      lines[task.lineIndex] = checkboxPrefix + task.text;
    });
    
    setContent(lines.join('\n'));
  };
  
  // Clear completed tasks
  const clearCompletedTasks = (): void => {
    setHideCompleted(!hideCompleted);
  };
  
  const handleEditClick = (): void => {
    setIsEditing(true);
  };
  
  const handleDoneClick = (): void => {
    setIsEditing(false);
    parseTasksFromContent(content);
  };
  
  const handleSave = (newContent: string): void => {
    setContent(newContent);
    parseTasksFromContent(newContent);
    setShowEditor(false);
  };
  
  const handleCancel = (): void => {
    setShowEditor(false);
  };
  
  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(e.target.value);
  };
  
  const handleBlur = (): void => {
    setIsEditing(false);
    parseTasksFromContent(content);
  };
  
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    // Save on Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      setIsEditing(false);
      parseTasksFromContent(content);
    }
    // Cancel on Escape
    if (e.key === 'Escape') {
      setIsEditing(false);
      // Revert to original content
      if (data?.content) {
        setContent(data.content);
        parseTasksFromContent(data.content);
      }
    }
  };
  
  // Calculate task progress
  const completedTaskCount = tasks.filter(task => task.checked).length;
  const totalTaskCount = tasks.length;
  const hasCompletedTasks = completedTaskCount > 0;
  
  // Progress indicator styles
  const progressPercentage = totalTaskCount > 0 ? (completedTaskCount / totalTaskCount) * 100 : 0;
  
  const actionButtons = (
    <div className="flex space-x-2">
      <IconButton 
        icon={<MdOutlineThumbUp />} 
        title="Like"
        className="text-gray-500"
      />
      
      <IconButton 
        icon={<MdOutlineThumbDown />} 
        title="Dislike"
        className="text-gray-500"
      />
    </div>
  );
  
  const copyButton = (
    <Button variant="secondary" size="small" className="flex items-center">
      <MdContentCopy className="mr-1" /> Copy
    </Button>
  );
  
  const editButton = isEditing ? (
    <Button 
      variant="primary" 
      size="small" 
      className="flex items-center mr-2"
      onClick={handleDoneClick}
    >
      <MdCheck className="mr-1" /> Done
    </Button>
  ) : (
    <Button 
      variant="secondary" 
      size="small" 
      className="flex items-center mr-2"
      onClick={handleEditClick}
    >
      <MdEdit className="mr-1" /> Edit
    </Button>
  );
  
  // Render content with task checkboxes
  const renderContentWithTasks = () => {
    if (isEditing) {
      return (
        <textarea
          ref={textareaRef}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] min-h-[200px]"
          value={content}
          onChange={handleTextChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          style={{ resize: 'vertical' }}
        />
      );
    }
    
    if (tasks.length === 0) {
      return (
        <div 
          className="whitespace-pre-wrap cursor-pointer" 
          onClick={handleEditClick}
        >
          {content}
        </div>
      );
    }
    
    const lines = content.split('\n');
    const taskLineIndices = tasks.map(task => task.lineIndex);
    
    // Create an array to hold rendered content
    const renderedContent: React.ReactNode[] = [];
    
    lines.forEach((line, index) => {
      // If this line is a task, render the task component instead
      if (taskLineIndices.includes(index)) {
        const task = tasks.find(t => t.lineIndex === index);
        
        // Skip if task is completed and we're hiding completed tasks
        if (task && hideCompleted && task.checked) {
          return;
        }
        
        if (task) {
          renderedContent.push(
            <TaskCheckbox 
              key={task.id}
              task={task.text}
              checked={task.checked}
              onChange={() => toggleTask(task.id)}
            />
          );
        }
      } else {
        // Regular line, not a task - make it clickable for editing
        renderedContent.push(
          <div 
            key={`line-${index}`} 
            className="my-1 cursor-pointer" 
            onClick={handleEditClick}
          >
            {line}
          </div>
        );
      }
    });
    
    return renderedContent;
  };
  
  return (
    <>
      <div className="py-2 px-4">
        <CollapsibleSection 
          title={data?.title || 'Assessment & Plan'}
          actions={actionButtons}
          defaultOpen={data?.defaultOpen !== undefined ? data?.defaultOpen : true}
        >
          {totalTaskCount > 0 && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm text-gray-600">
                  {completedTaskCount} of {totalTaskCount} tasks completed
                </div>
                
                {hasCompletedTasks && (
                  <Button 
                    variant="text" 
                    size="small" 
                    className="flex items-center text-[var(--primary-color)] hover:opacity-80"
                    onClick={clearCompletedTasks}
                  >
                    <MdClearAll className="mr-1" /> 
                    {hideCompleted ? 'Show Completed' : 'Hide Completed'}
                  </Button>
                )}
              </div>
              
              {/* Progress bar */}
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[var(--primary-color)] transition-all duration-300 ease-in-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          )}
          
          <div className="whitespace-pre-wrap">
            {renderContentWithTasks()}
          </div>
          
          <div className="mt-4 flex justify-end">
            {editButton}
            {copyButton}
          </div>
        </CollapsibleSection>
      </div>
      
      {showEditor && (
        <EditorModal 
          initialContent={content}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default AssessmentPlan;