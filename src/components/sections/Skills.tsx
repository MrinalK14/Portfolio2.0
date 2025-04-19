import { useState, useEffect } from "react";
import {
  Brain,
  Code,
  Monitor,
  Cog,
  Cpu,
  Bot,
  Lightbulb,
  Languages,
  FileCode,
  Code2,
  Braces,
  LayoutDashboard,
  ServerCog,
  Database,
  BarChart,
  GitBranch,
  Workflow,
  Terminal,
  Check,
  Lock
} from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: { name: string; icon: JSX.Element; level?: number }[];
  color: string;
  fileName: string;
  description: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>("web");
  const [isTyping, setIsTyping] = useState(false);
  const [visibleCode, setVisibleCode] = useState<string[]>([]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Web Dev",
      icon: <Monitor className="h-5 w-5" />,
      fileName: "web_stack.jsx",
      color: "text-blue-400",
      description: "Full-stack web development experience with modern frameworks and technologies",
      skills: [
        { name: "React.js", icon: <LayoutDashboard className="h-4 w-4" />, level: 80 },
        { name: "Next.js", icon: <ServerCog className="h-4 w-4" />, level: 80 },
        { name: "Node.js", icon: <Terminal className="h-4 w-4" />, level: 70 },
        { name: "MongoDB", icon: <Database className="h-4 w-4" />, level: 65 },
        { name: "Graph QL", icon: <BarChart className="h-4 w-4" />, level: 65 },
      ],
    },
    {
      title: "AI & ML",
      icon: <Brain className="h-5 w-5" />,
      fileName: "ai_skills.py",
      color: "text-purple-400",
      description: "Expertise in artificial intelligence, machine learning algorithms, and prompt engineering",
      skills: [
        { name: "Artificial Intelligence", icon: <Cpu className="h-4 w-4" />, level: 80 },
        { name: "Machine Learning", icon: <Bot className="h-4 w-4" />, level: 70 },
        { name: "Prompt Engineering", icon: <Lightbulb className="h-4 w-4" />, level: 85 },
      ],
    },
    {
      title: "Programming",
      icon: <Code className="h-5 w-5" />,
      fileName: "programming.js",
      color: "text-yellow-400",
      description: "Proficient in multiple programming languages with strong fundamentals",
      skills: [
        { name: "Python", icon: <FileCode className="h-4 w-4" />, level: 70 },
        { name: "C++", icon: <Code2 className="h-4 w-4" />, level: 50 },
        { name: "HTML/CSS", icon: <Braces className="h-4 w-4" />, level: 70 },
        { name: "JavaScript", icon: <Languages className="h-4 w-4" />, level: 80 },
      ],
    },
    {
      title: "DevOps",
      icon: <Cog className="h-5 w-5" />,
      fileName: "automation.sh",
      color: "text-green-400",
      description: "Software development, automation, and deployment workflows",
      skills: [
        { name: "API Development", icon: <ServerCog className="h-4 w-4" />, level: 60 },
        { name: "RPA", icon: <Workflow className="h-4 w-4" />, level: 50 },
        { name: "Git/GitHub", icon: <GitBranch className="h-4 w-4" />, level: 75 },
      ],
    },
  ];

  const currentCategory = skillCategories.find(
    (category) => category.title.toLowerCase().includes(activeCategory.toLowerCase())
  ) || skillCategories[0];

  useEffect(() => {
    // Simulate typing effect when category changes
    setIsTyping(true);
    setVisibleCode([]);
    
    const codeLines = generateCodeForSkills(currentCategory);
    
    // Reveal lines one by one with typing effect
    codeLines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleCode(prev => [...prev, line]);
        if (index === codeLines.length - 1) {
          setTimeout(() => setIsTyping(false), 300);
        }
      }, 100 * (index + 1));
    });
  }, [activeCategory]);

  // Generate code representation based on skill category
  const generateCodeForSkills = (category: SkillCategory): string[] => {
    const lines: string[] = [];
    
    if (category.fileName.endsWith('.py')) {
      lines.push(`# ${category.description}`);
      lines.push('class Skills:');
      lines.push('    def __init__(self):');
      lines.push('        self.expertise = {');
      category.skills.forEach(skill => {
        lines.push(`            "${skill.name}": ${skill.level},  # ${skill.level >= 70 ? 'Advanced' : 'Intermediate'}`);
      });
      lines.push('        }');
      lines.push('');
      lines.push('    def get_proficiency(self, skill_name):');
      lines.push('        return self.expertise.get(skill_name, 0)');
      lines.push('');
      lines.push('# Instantiate skills');
      lines.push('my_skills = Skills()');
    } 
    else if (category.fileName.endsWith('.js') || category.fileName.endsWith('.jsx')) {
      lines.push(`// ${category.description}`);
      lines.push('const skills = {');
      category.skills.forEach(skill => {
        lines.push(`  ${skill.name.replace(/[^a-zA-Z0-9]/g, '')}: {`);
        lines.push(`    level: ${skill.level},`);
        lines.push(`    isAdvanced: ${skill.level >= 70 ? 'true' : 'false'},`);
        lines.push('  },');
      });
      lines.push('};');
      lines.push('');
      lines.push('export default function getSkillLevel(skill) {');
      lines.push('  return skills[skill]?.level || 0;');
      lines.push('}');
    }
    else if (category.fileName.endsWith('.sh')) {
      lines.push(`# ${category.description}`);
      lines.push('#!/bin/bash');
      lines.push('');
      lines.push('declare -A skill_levels');
      category.skills.forEach(skill => {
        lines.push(`skill_levels["${skill.name}"]=${skill.level}`);
      });
      lines.push('');
      lines.push('function check_proficiency() {');
      lines.push('  local skill_name="$1"');
      lines.push('  local level=${skill_levels["$skill_name"]}');
      lines.push('  ');
      lines.push('  if [ "$level" -ge 70 ]; then');
      lines.push('    echo "Advanced: $skill_name ($level%)"');
      lines.push('  else');
      lines.push('    echo "Intermediate: $skill_name ($level%)"');
      lines.push('  fi');
      lines.push('}');
    }
    
    return lines;
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#0A0A0A] text-gray-200 font-mono">
      {/* Code editor header */}
      <div className="border-b border-gray-800 p-2 flex items-center gap-2">
        {skillCategories.map((category) => (
          <button
            key={category.title}
            onClick={() => setActiveCategory(category.title.toLowerCase())}
            className={`px-3 py-1.5 text-sm rounded-t-md flex items-center gap-1.5 ${
              category.title.toLowerCase().includes(activeCategory.toLowerCase())
                ? `bg-[#1E1E1E] border-t border-l border-r border-gray-700 ${category.color}`
                : "bg-[#121212] text-gray-400 hover:bg-[#191919]"
            }`}
          >
            {category.icon}
            <span>{category.fileName}</span>
            {category.title.toLowerCase().includes(activeCategory.toLowerCase()) && (
              <span className="ml-1.5 bg-gray-800 rounded-full p-0.5 text-xs">
                <Check className="h-3 w-3" />
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-1 h-full">
        {/* Left sidebar - line numbers */}
        <div className="w-12 bg-[#121212] text-gray-600 p-2 text-right text-sm select-none border-r border-gray-800">
          {Array.from({ length: Math.max(20, visibleCode.length) }).map((_, i) => (
            <div key={i} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Main code editor area */}
        <div className="flex-1 p-4 bg-[#1E1E1E] overflow-auto">
          <div className="mb-4">
            <div className={`text-sm font-medium ${currentCategory.color}`}>
              {currentCategory.title} Skills // {currentCategory.description}
            </div>
            <div className="h-1 w-24 bg-gray-800 mt-1"></div>
          </div>
          
          <div className="code-block leading-6 whitespace-pre">
            {visibleCode.map((line, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="code-line"
              >
                {colorizeCodeLine(line, currentCategory.color)}
              </motion.div>
            ))}
            {isTyping && <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse">|</span>}
          </div>
        </div>

        {/* Right sidebar - skill meters */}
        <div className="w-52 border-l border-gray-800 bg-[#121212] p-4 hidden lg:block">
          <div className="text-xs uppercase text-gray-500 font-semibold mb-4">Skill Proficiency</div>
          {currentCategory.skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-1.5">
                  <span className={currentCategory.color}>{skill.icon}</span>
                  <span className="text-xs">{skill.name}</span>
                </div>
                <span className="text-xs">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-800 rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full`}
                  style={{ 
                    backgroundColor: getColorForCategory(currentCategory.color),
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                <div className="flex items-center gap-1">
                  <Check className="h-2.5 w-2.5" />
                  <span>{skill.level >= 70 ? 'Advanced' : 'Intermediate'}</span>
                </div>
                <div className="flex items-center gap-1">
                  {skill.level < 60 && <Lock className="h-2.5 w-2.5" />}
                  {skill.level < 60 && <span>Learning</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom status bar */}
      <div className="border-t border-gray-800 p-1.5 flex justify-between text-xs text-gray-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="rounded-full h-2 w-2 bg-green-500"></span>
            Ready
          </span>
          <span>Ln {visibleCode.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <span>{currentCategory.fileName}</span>
          <span>UTF-8</span>
        </div>
      </div>
    </div>
  );
};

// Helper function to colorize code syntax
function colorizeCodeLine(line: string, categoryColor: string): JSX.Element {
  if (line.startsWith('import') || line.startsWith('from')) {
    return <span className="text-blue-400">{line}</span>;
  }
  else if (line.startsWith('#') || line.startsWith('//')) {
    return <span className="text-gray-500">{line}</span>;
  }
  else if (line.includes('class ') || line.includes('function ') || line.includes('const ') || line.includes('def ')) {
    // Colorize class, function, or variable declarations
    return (
      <span>
        {line.split(/\b/).map((part, i) => {
          if (['class', 'function', 'const', 'def', 'export', 'default', 'return', 'if', 'else', 'declare', 'local'].includes(part)) {
            return <span key={i} className="text-purple-400">{part}</span>;
          } else if (['true', 'false'].includes(part)) {
            return <span key={i} className="text-orange-400">{part}</span>;
          } else if (!isNaN(Number(part)) || part === 'null' || part === 'undefined') {
            return <span key={i} className="text-blue-300">{part}</span>;
          } else if (part.startsWith('"') || part.startsWith("'")) {
            return <span key={i} className="text-green-400">{part}</span>;
          } else {
            return <span key={i}>{part}</span>;
          }
        })}
      </span>
    );
  }
  else if (line.includes(':') && !line.includes('//')) {
    // Handle Python dictionary keys or similar
    const [key, value] = line.split(':');
    return (
      <span>
        <span className="text-yellow-300">{key}</span>:
        {value && <span className={value.includes('Advanced') ? "text-green-400" : ""}>{value}</span>}
      </span>
    );
  } 
  else if (line.trim().startsWith('{') || line.trim().startsWith('}') || line.trim() === ');' || line.trim() === '};') {
    return <span className="text-yellow-200">{line}</span>;
  }
  else {
    return <span>{line}</span>;
  }
}

// Get actual color value from Tailwind class
function getColorForCategory(colorClass: string): string {
  const colorMap: { [key: string]: string } = {
    'text-purple-400': '#C084FC',
    'text-blue-400': '#60A5FA',
    'text-green-400': '#4ADE80',
    'text-yellow-400': '#FACC15',
  };
  
  return colorMap[colorClass] || '#60A5FA';
}

export default Skills;
