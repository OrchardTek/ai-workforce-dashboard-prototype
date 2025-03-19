import React, { useState } from "react";
import {
  Bell,
  Book,
  Clipboard,
  FileText,
  Home,
  Layers,
  Plus,
  Search,
  Settings,
  Users,
} from "lucide-react";

// Main App component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showClassDialog, setShowClassDialog] = useState(false);
  const [showRubricDialog, setShowRubricDialog] = useState(false);

  // Mock data for classes
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "Computer Science 101",
      students: 32,
      teachers: ["Dr. Smith", "Prof. Johnson"],
      avgScore: 78,
      startDate: "2025-01-15",
      endDate: "2025-05-30",
    },
    {
      id: 2,
      name: "Business Communications",
      students: 28,
      teachers: ["Dr. Williams"],
      avgScore: 82,
      startDate: "2025-01-10",
      endDate: "2025-05-25",
    },
    {
      id: 3,
      name: "Professional Development",
      students: 45,
      teachers: ["Prof. Garcia", "Dr. Chen"],
      avgScore: 75,
      startDate: "2025-01-20",
      endDate: "2025-06-05",
    },
  ]);

  // Mock data for rubrics
  const [rubrics, setRubrics] = useState([
    {
      id: 1,
      name: "Resume Standard Scoring",
      tool: "Resume",
      criteria: 5,
      classes: ["Computer Science 101", "Business Communications"],
    },
    {
      id: 2,
      name: "LinkedIn Profile Assessment",
      tool: "LinkedIn",
      criteria: 6,
      classes: ["Business Communications", "Professional Development"],
    },
    {
      id: 3,
      name: "Video Presentation Rubric",
      tool: "Video",
      criteria: 8,
      classes: ["Computer Science 101", "Professional Development"],
    },
  ]);

  // Function to add a new class
  const addClass = (newClass) => {
    setClasses([...classes, { id: classes.length + 1, ...newClass }]);
    setShowClassDialog(false);
  };

  // Function to add a new rubric
  const addRubric = (newRubric) => {
    setRubrics([...rubrics, { id: rubrics.length + 1, ...newRubric }]);
    setShowRubricDialog(false);
  };

  // Content to display based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "classes":
        return (
          <ClassesContent
            classes={classes}
            onAddClass={() => setShowClassDialog(true)}
          />
        );
      case "rubrics":
        return (
          <RubricsContent
            rubrics={rubrics}
            onAddRubric={() => setShowRubricDialog(true)}
          />
        );
      case "analytics":
        return <AnalyticsContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <div className="flex space-x-4 items-center">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                <Bell size={20} />
              </button>
              <div className="flex items-center h-8 w-8 rounded-full">
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.2001 32C45.8275 32 51.2001 26.6274 51.2001 20C51.2001 13.3726 45.8275 8 39.2001 8C32.9802 8 27.8656 12.7321 27.2601 18.7925C24.8084 17.6836 22.1597 17.0209 19.4473 16.8465C20.9595 7.29911 29.2274 0 39.2001 0C50.2458 0 59.2001 8.95431 59.2001 20C59.2001 30.6428 50.887 39.344 40.4 39.9646V40H27.2195V38.2545C27.2195 35.987 26.2844 33.7821 24.5705 32.1336C22.8517 30.4804 20.4908 29.5273 18 29.5273C15.5092 29.5273 13.1483 30.4804 11.4295 32.1336C9.71564 33.7821 8.78049 35.987 8.78049 38.2545V40H0V38.2118C0 33.5371 1.94004 29.0906 5.33341 25.8398C8.61822 22.693 13.0047 20.9102 17.5711 20.805C17.7139 20.8017 17.8569 20.8 18 20.8C18.1108 20.8 18.2215 20.801 18.3322 20.803C22.9333 20.8851 27.3586 22.6707 30.6666 25.8398C32.4991 27.5953 33.9078 29.6995 34.8159 32H39.2001Z"
                    fill="#5233DD"
                  ></path>
                  <path
                    d="M21.677 34.9245C22.6521 35.7725 23.2 36.9227 23.2 38.122V40H12.8V38.122C12.8 36.9227 13.3479 35.7725 14.323 34.9245C15.2982 34.0764 16.6209 33.6 18 33.6C19.3791 33.6 20.7018 34.0764 21.677 34.9245Z"
                    fill="#5233DD"
                  ></path>
                  <path
                    d="M43.7818 18.0363C42.3358 18.0363 41.1637 16.8642 41.1637 15.4182V14.7636C41.1637 13.6792 40.2845 12.8 39.2 12.8C38.1155 12.8 37.2364 13.6791 37.2364 14.7636V15.4182C37.2364 16.8642 36.0642 18.0363 34.6182 18.0363H33.9636C32.8792 18.0363 32 18.9155 32 20C32 21.0845 32.8792 21.9636 33.9636 21.9636H34.6182C36.0642 21.9636 37.2364 23.1358 37.2364 24.5818V25.2364C37.2364 26.3209 38.1155 27.2 39.2 27.2C40.2845 27.2 41.1637 26.3209 41.1637 25.2364V24.5818C41.1637 23.1358 42.3358 21.9636 43.7818 21.9636H44.4364C45.5209 21.9636 46.4 21.0845 46.4 20C46.4 18.9155 45.5209 18.0363 44.4364 18.0363H43.7818Z"
                    fill="#5233DD"
                  ></path>
                  <path
                    d="M11.2001 3.20004C11.2001 4.96732 12.6328 6.39999 14.4001 6.39999H15.2C16.5255 6.39999 17.6 7.47451 17.6 8.79999C17.6 10.1255 16.5255 11.2 15.2 11.2H14.4001C12.6328 11.2 11.2001 12.6327 11.2001 14.3999V15.2C11.2001 16.5255 10.1256 17.6 8.80011 17.6C7.47463 17.6 6.40011 16.5255 6.40011 15.2L6.40011 14.4C6.40011 12.6327 4.96742 11.2 3.20011 11.2H2.4C1.07452 11.2 0 10.1255 0 8.79999C0 7.47451 1.07452 6.39999 2.4 6.39999H3.20012C4.96742 6.39999 6.40011 4.96731 6.40011 3.2L6.40011 2.4C6.40011 1.07452 7.47463 0 8.80011 0C10.1256 0 11.2001 1.07452 11.2001 2.4V3.20004Z"
                    fill="#5233DD"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">{renderContent()}</main>
      </div>

      {/* Dialog for creating a new class */}
      {showClassDialog && (
        <CreateClassDialog
          onClose={() => setShowClassDialog(false)}
          onSave={addClass}
        />
      )}

      {/* Dialog for creating a new rubric */}
      {showRubricDialog && (
        <CreateRubricDialog
          onClose={() => setShowRubricDialog(false)}
          onSave={addRubric}
        />
      )}
    </div>
  );
};

// Sidebar component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { id: "classes", label: "Classes", icon: <Book size={20} /> },
    { id: "students", label: "Students", icon: <Users size={20} /> },
    { id: "rubrics", label: "Scoring Rubrics", icon: <Clipboard size={20} /> },
    { id: "analytics", label: "Analytics", icon: <Layers size={20} /> },
    { id: "reports", label: "Reports", icon: <FileText size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-5 border-b border-gray-700">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Workforce AI</h1>
        </div>
      </div>
      <nav className="mt-5">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-4 py-3 ${
                  activeTab === item.id ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// Dashboard content component
const DashboardContent = () => {
  const stats = [
    {
      label: "Total Classes",
      value: "14",
      icon: <Book size={24} />,
      color: "bg-blue-500",
    },
    {
      label: "Active Students",
      value: "243",
      icon: <Users size={24} />,
      color: "bg-green-500",
    },
    {
      label: "Avg. Readiness Score",
      value: "76%",
      icon: <Layers size={24} />,
      color: "bg-yellow-500",
    },
    {
      label: "Rubrics Created",
      value: "8",
      icon: <Clipboard size={24} />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Administrator Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            {
              action: "New student enrolled",
              class: "Computer Science 101",
              time: "2 hours ago",
            },
            {
              action: "Rubric updated",
              class: "Resume Standard Scoring",
              time: "5 hours ago",
            },
            {
              action: "Class start date modified",
              class: "Business Communications",
              time: "1 day ago",
            },
            {
              action: "New teacher assigned",
              class: "Professional Development",
              time: "2 days ago",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex justify-between border-b pb-3 last:border-0"
            >
              <div>
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.class}</p>
              </div>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Overview */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Performance Overview</h3>
        <div className="space-y-4">
          {[
            { category: "Resume Quality", score: 82, change: "+5%" },
            { category: "LinkedIn Profile", score: 78, change: "+3%" },
            { category: "Video Presentation", score: 71, change: "+7%" },
          ].map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{item.category}</span>
                <span className="text-green-500">{item.change}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-500">
                {item.score}% Average Score
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Classes content component
const ClassesContent = ({ classes, onAddClass }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Manage Classes</h2>
        <button
          onClick={onAddClass}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Plus size={16} className="mr-2" />
          Create New Class
        </button>
      </div>

      {/* Classes Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Students
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Teachers
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Average Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Range
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {classes.map((classItem) => (
              <tr key={classItem.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900">
                    {classItem.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {classItem.students}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {classItem.teachers.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {classItem.avgScore}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  {classItem.startDate} to {classItem.endDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Rubrics content component
const RubricsContent = ({ rubrics, onAddRubric }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Scoring Rubrics</h2>
        <button
          onClick={onAddRubric}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Plus size={16} className="mr-2" />
          Create New Rubric
        </button>
      </div>

      {/* Rubrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rubrics.map((rubric) => (
          <div
            key={rubric.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="p-5">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold">{rubric.name}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    rubric.tool === "Resume"
                      ? "bg-blue-100 text-blue-800"
                      : rubric.tool === "LinkedIn"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {rubric.tool}
                </span>
              </div>
              <p className="text-gray-500 mt-2">
                {rubric.criteria} assessment criteria
              </p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500">
                  Applied to classes:
                </h4>
                <div className="mt-1 flex flex-wrap gap-1">
                  {rubric.classes.map((className, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded-md text-xs"
                    >
                      {className}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 flex justify-end space-x-2">
              <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                Edit
              </button>
              <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                Duplicate
              </button>
              <button className="text-red-600 hover:text-red-900 text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Analytics content component
const AnalyticsContent = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Analytics & Reports</h2>

      {/* Filter Controls */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>Custom range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>All Departments</option>
              <option>Computer Science</option>
              <option>Business</option>
              <option>Communications</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Assessment Type
            </label>
            <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>All Types</option>
              <option>Resume</option>
              <option>LinkedIn</option>
              <option>Video</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Improvement Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">
            Performance Improvement
          </h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">
              Performance trend chart would appear here
            </p>
          </div>
        </div>

        {/* Score Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Score Distribution</h3>
          <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
            <p className="text-gray-500">
              Score distribution chart would appear here
            </p>
          </div>
        </div>
      </div>

      {/* Tool Performance Comparison */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">
          Tool Performance Comparison
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Resume</h4>
            <div className="text-2xl font-bold text-blue-600">78.5%</div>
            <p className="text-sm text-gray-500">Average score</p>
            <div className="mt-2 text-green-500 text-sm">
              ↑ 4.2% from last period
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">LinkedIn</h4>
            <div className="text-2xl font-bold text-green-600">81.2%</div>
            <p className="text-sm text-gray-500">Average score</p>
            <div className="mt-2 text-green-500 text-sm">
              ↑ 5.7% from last period
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Video</h4>
            <div className="text-2xl font-bold text-purple-600">72.8%</div>
            <p className="text-sm text-gray-500">Average score</p>
            <div className="mt-2 text-green-500 text-sm">
              ↑ 3.1% from last period
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="flex justify-end">
        <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
          <Download size={16} className="mr-2" />
          Export Reports
        </button>
      </div>
    </div>
  );
};

// Settings content component
const SettingsContent = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">System Settings</h2>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-lg font-medium">Branding Settings</h3>
          <p className="mt-1 text-sm text-gray-500">
            Customize the appearance of your platform
          </p>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institution Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue="State University"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Platform Title
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue="Workforce Readiness Platform"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Logo Upload
              </label>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center mr-4">
                  <svg
                    width="245"
                    height="41"
                    viewBox="0 0 245 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M214.475 32.9309V12.521H219.824V16.1539H220.08C220.506 14.949 221.217 13.9997 222.215 13.306C223.213 12.6123 224.4 12.2654 225.775 12.2654C227.175 12.2654 228.362 12.6184 229.335 13.3243C230.321 14.018 230.978 14.9612 231.307 16.1539H231.526C231.94 14.9734 232.694 14.0302 233.79 13.3243C234.885 12.6184 236.175 12.2654 237.66 12.2654C239.558 12.2654 241.104 12.8679 242.297 14.0728C243.502 15.2776 244.104 16.9876 244.104 19.2026V32.9309H238.445V20.3345C238.445 19.1904 238.141 18.3385 237.532 17.7787C236.936 17.2188 236.187 16.9389 235.287 16.9389C234.264 16.9389 233.461 17.2675 232.877 17.9247C232.305 18.5698 232.019 19.4217 232.019 20.4805V32.9309H226.542V20.1884C226.542 19.2026 226.256 18.4176 225.684 17.8334C225.112 17.2371 224.364 16.9389 223.439 16.9389C222.806 16.9389 222.24 17.0971 221.741 17.4136C221.242 17.73 220.846 18.1681 220.554 18.728C220.262 19.2756 220.116 19.9328 220.116 20.6996V32.9309H214.475Z"
                      fill="#1A1A1A"
                    ></path>
                    <path
                      d="M206.428 24.2595V12.521H212.069V32.9309H206.647V29.225H206.428C205.966 30.4056 205.205 31.367 204.146 32.1094C203.087 32.8397 201.791 33.1987 200.258 33.1865C198.894 33.1865 197.69 32.8823 196.643 32.2737C195.608 31.653 194.799 30.7707 194.215 29.6266C193.643 28.4826 193.357 27.1134 193.357 25.5191V12.521H198.998V24.5333C198.998 25.726 199.32 26.6753 199.966 27.3812C200.611 28.0749 201.469 28.4157 202.54 28.4035C203.221 28.4035 203.854 28.2514 204.438 27.9471C205.022 27.6307 205.497 27.1621 205.862 26.5414C206.239 25.9207 206.428 25.1601 206.428 24.2595Z"
                      fill="#1A1A1A"
                    ></path>
                    <path
                      d="M191.444 18.3446L186.277 18.6549C186.143 18.0099 185.784 17.4562 185.2 16.9937C184.616 16.519 183.831 16.2817 182.845 16.2817C181.969 16.2817 181.233 16.4643 180.636 16.8294C180.052 17.1945 179.76 17.6813 179.76 18.2898C179.76 18.7767 179.949 19.1965 180.326 19.5495C180.715 19.8903 181.379 20.158 182.316 20.3527L186.022 21.083C188.006 21.4846 189.484 22.1357 190.458 23.0363C191.432 23.9369 191.918 25.1236 191.918 26.5962C191.918 27.9471 191.529 29.1277 190.75 30.1378C189.971 31.1358 188.9 31.9208 187.537 32.4928C186.174 33.0526 184.61 33.3326 182.845 33.3326C180.143 33.3326 177.989 32.7666 176.383 31.6348C174.788 30.5029 173.857 28.9694 173.59 27.0343L179.121 26.7422C179.304 27.5698 179.717 28.1966 180.362 28.6226C181.008 29.0485 181.835 29.2615 182.845 29.2615C183.831 29.2615 184.628 29.0668 185.237 28.6773C185.857 28.2879 186.168 27.795 186.168 27.1986C186.168 26.1885 185.292 25.5069 183.539 25.154L180.016 24.4238C178.032 24.0221 176.553 23.3345 175.579 22.3609C174.606 21.3872 174.119 20.1397 174.119 18.6184C174.119 17.304 174.478 16.1722 175.196 15.2229C175.914 14.2736 176.918 13.5433 178.208 13.0322C179.511 12.521 181.032 12.2654 182.772 12.2654C185.352 12.2654 187.379 12.8131 188.851 13.9085C190.336 14.9916 191.2 16.4703 191.444 18.3446Z"
                      fill="#1A1A1A"
                    ></path>
                    <path
                      d="M153.092 40.5618V12.521H158.642V15.9714H158.897C159.153 15.4115 159.518 14.8456 159.993 14.2736C160.467 13.7016 161.088 13.2269 161.855 12.8496C162.622 12.4602 163.571 12.2654 164.703 12.2654C166.2 12.2654 167.569 12.6549 168.81 13.4338C170.064 14.2005 171.068 15.3628 171.822 16.9207C172.577 18.4785 172.954 20.4258 172.954 22.7625C172.954 25.0262 172.589 26.943 171.859 28.513C171.129 30.0709 170.137 31.2514 168.883 32.0547C167.642 32.8579 166.242 33.2595 164.684 33.2595C163.589 33.2595 162.658 33.077 161.891 32.7119C161.125 32.3467 160.498 31.8904 160.011 31.3427C159.536 30.7828 159.165 30.223 158.897 29.6632H158.733V40.5618H153.092ZM162.895 28.7686C163.82 28.7686 164.599 28.513 165.232 28.0019C165.865 27.4907 166.346 26.7848 166.674 25.8842C167.003 24.9714 167.167 23.9248 167.167 22.7442C167.167 21.5637 167.003 20.5292 166.674 19.6408C166.358 18.7401 165.883 18.0343 165.25 17.5231C164.617 17.0119 163.832 16.7564 162.895 16.7564C161.983 16.7564 161.204 17.0058 160.559 17.5048C159.926 17.9917 159.439 18.6854 159.098 19.586C158.77 20.4744 158.605 21.5272 158.605 22.7442C158.605 23.9491 158.776 25.0019 159.116 25.9025C159.457 26.8031 159.944 27.509 160.577 28.0201C161.222 28.5191 161.995 28.7686 162.895 28.7686Z"
                      fill="#1A1A1A"
                    ></path>
                    <path
                      d="M145.045 32.9309V12.521H150.686V32.9309H145.045ZM147.856 9.91046C147.016 9.91046 146.298 9.63053 145.702 9.07069C145.106 8.51085 144.808 7.83539 144.808 7.04431C144.808 6.25322 145.106 5.58385 145.702 5.03617C146.298 4.47633 147.016 4.19641 147.856 4.19641C148.708 4.19641 149.432 4.47633 150.029 5.03617C150.625 5.58385 150.923 6.25322 150.923 7.04431C150.923 7.83539 150.625 8.51085 150.029 9.07069C149.432 9.63053 148.708 9.91046 147.856 9.91046Z"
                      fill="#1A1A1A"
                    ></path>
                    <path
                      d="M133.438 33.3326C131.381 33.3326 129.598 32.8944 128.089 32.0181C126.592 31.1297 125.436 29.9005 124.62 28.3305C123.817 26.7483 123.416 24.9106 123.416 22.8173C123.416 20.6996 123.817 18.8558 124.62 17.2858C125.436 15.7036 126.592 14.4744 128.089 13.5981C129.598 12.7097 131.381 12.2654 133.438 12.2654C135.507 12.2654 137.29 12.7097 138.787 13.5981C140.296 14.4744 141.452 15.7036 142.255 17.2858C143.071 18.8558 143.479 20.6996 143.479 22.8173C143.479 24.9106 143.071 26.7483 142.255 28.3305C141.452 29.9005 140.296 31.1297 138.787 32.0181C137.29 32.8944 135.507 33.3326 133.438 33.3326ZM133.474 28.9147C134.412 28.9147 135.197 28.653 135.829 28.1297C136.462 27.5942 136.937 26.8639 137.253 25.939C137.582 25.014 137.746 23.9613 137.746 22.7807C137.746 21.588 137.582 20.5353 137.253 19.6225C136.937 18.7097 136.462 17.9917 135.829 17.4683C135.197 16.945 134.412 16.6833 133.474 16.6833C132.525 16.6833 131.728 16.945 131.083 17.4683C130.45 17.9917 129.969 18.7097 129.641 19.6225C129.324 20.5353 129.166 21.588 129.166 22.7807C129.166 23.9613 129.324 25.014 129.641 25.939C129.969 26.8639 130.45 27.5942 131.083 28.1297C131.728 28.653 132.525 28.9147 133.474 28.9147Z"
                      fill="#1A1A1A"
                    ></path>
                    <path
                      d="M111.9 41C109.149 41 106.995 40.4523 105.437 39.3569C103.879 38.2738 102.93 36.9228 102.589 35.3042L107.811 34.6105C107.969 35.0243 108.218 35.4076 108.559 35.7606C108.9 36.1135 109.356 36.3934 109.928 36.6003C110.5 36.8194 111.2 36.9289 112.028 36.9289C113.257 36.9289 114.273 36.6308 115.076 36.0344C115.88 35.4502 116.281 34.4583 116.281 33.0587V29.3163H116.044C115.8 29.8761 115.429 30.4116 114.93 30.9228C114.431 31.434 113.792 31.8478 113.013 32.1642C112.234 32.4806 111.303 32.6388 110.22 32.6388C108.687 32.6388 107.293 32.2859 106.04 31.58C104.798 30.862 103.8 29.7666 103.046 28.294C102.303 26.8213 101.932 24.9593 101.932 22.7077C101.932 20.3832 102.309 18.4481 103.064 16.9024C103.831 15.3567 104.841 14.2005 106.094 13.4338C107.348 12.6549 108.723 12.2654 110.22 12.2654C111.364 12.2654 112.32 12.4602 113.086 12.8496C113.865 13.2269 114.498 13.7016 114.985 14.2736C115.472 14.8456 115.837 15.4115 116.08 15.9714H116.299V12.521H121.867V33.15C121.867 34.8782 121.441 36.3265 120.59 37.4949C119.738 38.6632 118.563 39.5395 117.066 40.1237C115.569 40.7079 113.847 41 111.9 41ZM112.009 28.3853C113.372 28.3853 114.425 27.8802 115.168 26.87C115.922 25.8599 116.299 24.4603 116.299 22.6712C116.299 21.4785 116.129 20.444 115.788 19.5677C115.46 18.6793 114.979 17.9917 114.346 17.5048C113.713 17.0058 112.934 16.7564 112.009 16.7564C111.084 16.7564 110.299 17.0119 109.654 17.5231C109.021 18.0221 108.541 18.7158 108.212 19.6042C107.884 20.4927 107.719 21.515 107.719 22.6712C107.719 23.8396 107.884 24.8558 108.212 25.7199C108.541 26.5719 109.021 27.2291 109.654 27.6915C110.299 28.154 111.084 28.3853 112.009 28.3853Z"
                      fill="#1A1A1A"
                    ></path>
                    <path
                      d="M91.1649 33.3326C89.1081 33.3326 87.3251 32.8944 85.816 32.0181C84.319 31.1297 83.1628 29.9005 82.3474 28.3305C81.5442 26.7483 81.1425 24.9106 81.1425 22.8173C81.1425 20.6996 81.5442 18.8558 82.3474 17.2858C83.1628 15.7036 84.319 14.4744 85.816 13.5981C87.3251 12.7097 89.1081 12.2654 91.1649 12.2654C93.2339 12.2654 95.0169 12.7097 96.5139 13.5981C98.023 14.4744 99.1792 15.7036 99.9825 17.2858C100.798 18.8558 101.206 20.6996 101.206 22.8173C101.206 24.9106 100.798 26.7483 99.9825 28.3305C99.1792 29.9005 98.023 31.1297 96.5139 32.0181C95.0169 32.8944 93.2339 33.3326 91.1649 33.3326ZM91.2014 28.9147C92.1386 28.9147 92.9236 28.653 93.5564 28.1297C94.1893 27.5942 94.664 26.8639 94.9804 25.939C95.309 25.014 95.4733 23.9613 95.4733 22.7807C95.4733 21.588 95.309 20.5353 94.9804 19.6225C94.664 18.7097 94.1893 17.9917 93.5564 17.4683C92.9236 16.945 92.1386 16.6833 91.2014 16.6833C90.2522 16.6833 89.455 16.945 88.8099 17.4683C88.1771 17.9917 87.6963 18.7097 87.3677 19.6225C87.0513 20.5353 86.8931 21.588 86.8931 22.7807C86.8931 23.9613 87.0513 25.014 87.3677 25.939C87.6963 26.8639 88.1771 27.5942 88.8099 28.1297C89.455 28.653 90.2522 28.9147 91.2014 28.9147Z"
                      fill="#1A1A1A"
                    ></path>
                    <path
                      d="M63 32.9309V5.72989H68.7323V28.1844H80.3977V32.9309H63Z"
                      fill="#1A1A1A"
                    ></path>
                    <path
                      d="M37.3947 40C43.8275 39.8689 49 34.6073 49 28.1389C49 24.9931 47.7512 21.9762 45.5282 19.7518L25.7895 0V12.2771C25.7895 14.3303 26.6046 16.2995 28.0556 17.7514L32.6795 22.3784L32.6921 22.3907L40.4452 30.149C40.697 30.4009 40.697 30.8094 40.4452 31.0613C40.1935 31.3133 39.7852 31.3133 39.5335 31.0613L36.861 28.3871H12.139L9.46655 31.0613C9.21476 31.3133 8.80654 31.3133 8.55476 31.0613C8.30297 30.8094 8.30297 30.4009 8.55475 30.149L16.3079 22.3907L16.3205 22.3784L20.9444 17.7514C22.3954 16.2995 23.2105 14.3303 23.2105 12.2771V0L3.47175 19.7518C1.24882 21.9762 0 24.9931 0 28.1389C0 34.6073 5.17252 39.8689 11.6053 40H37.3947Z"
                      fill="#FF0A0A"
                    ></path>
                  </svg>
                </div>
                <button className="px-3 py-1 border border-gray-300 rounded shadow-sm hover:bg-gray-50">
                  Change
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Color
              </label>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded mr-2"></div>
                <input
                  type="text"
                  className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  defaultValue="#3B82F6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-b">
          <h3 className="text-lg font-medium">Security Settings</h3>
          <p className="mt-1 text-sm text-gray-500">
            Configure system security and data retention policies
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Retention Period
              </label>
              <select className="w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option>1 year</option>
                <option>2 years</option>
                <option>3 years</option>
                <option>5 years</option>
                <option>Forever</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                id="audit-logs"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                defaultChecked
              />
              <label
                htmlFor="audit-logs"
                className="ml-2 block text-sm text-gray-700"
              >
                Enable detailed audit logs
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="encryption"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                defaultChecked
              />
              <label
                htmlFor="encryption"
                className="ml-2 block text-sm text-gray-700"
              >
                Enable enhanced data encryption
              </label>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-medium">AI Processing Settings</h3>
          <p className="mt-1 text-sm text-gray-500">
            Configure AI processing options for student submissions
          </p>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Default Holistic Score Weights
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="w-24 text-sm">Resume:</span>
                    <input
                      type="number"
                      className="w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="30"
                    />
                    <span className="ml-1">%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 text-sm">LinkedIn:</span>
                    <input
                      type="number"
                      className="w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="30"
                    />
                    <span className="ml-1">%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-24 text-sm">Video:</span>
                    <input
                      type="number"
                      className="w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="40"
                    />
                    <span className="ml-1">%</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  AI Processing Options
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      id="real-time"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      defaultChecked
                    />
                    <label
                      htmlFor="real-time"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Enable real-time processing
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="alerts"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      defaultChecked
                    />
                    <label
                      htmlFor="alerts"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Generate alerts for processing failures
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="batch"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="batch"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Enable overnight batch processing
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-3 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

// Dialog for creating a new class
const CreateClassDialog = ({ onClose, onSave }) => {
  const [className, setClassName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedTeachers, setSelectedTeachers] = useState([]);

  // Mock list of teachers
  const teachersList = [
    "Dr. Smith",
    "Prof. Johnson",
    "Dr. Williams",
    "Prof. Garcia",
    "Dr. Chen",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: className,
      students: 0,
      teachers: selectedTeachers,
      avgScore: 0,
      startDate,
      endDate,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-medium">Create New Class</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Class Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Assign Teachers
              </label>
              <div className="mt-1 max-h-40 overflow-y-auto border rounded-md divide-y">
                {teachersList.map((teacher) => (
                  <div key={teacher} className="flex items-center p-3">
                    <input
                      type="checkbox"
                      id={`teacher-${teacher}`}
                      checked={selectedTeachers.includes(teacher)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTeachers([...selectedTeachers, teacher]);
                        } else {
                          setSelectedTeachers(
                            selectedTeachers.filter((t) => t !== teacher)
                          );
                        }
                      }}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`teacher-${teacher}`}
                      className="ml-3 block text-sm text-gray-700"
                    >
                      {teacher}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Generate Login Code
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value="CLASS-4578-XP"
                  readOnly
                />
                <button
                  type="button"
                  className="px-4 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md hover:bg-gray-200"
                >
                  Regenerate
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-3 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
            >
              Create Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Dialog for creating a new rubric
const CreateRubricDialog = ({ onClose, onSave }) => {
  const [rubricName, setRubricName] = useState("");
  const [selectedTool, setSelectedTool] = useState("");
  const [criteria, setCriteria] = useState([
    { id: 1, name: "Criterion 1", description: "", weight: 25 },
    { id: 2, name: "Criterion 2", description: "", weight: 25 },
    { id: 3, name: "Criterion 3", description: "", weight: 25 },
    { id: 4, name: "Criterion 4", description: "", weight: 25 },
  ]);

  const tools = ["Resume", "LinkedIn", "Video"];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: rubricName,
      tool: selectedTool,
      criteria: criteria.length,
      classes: [],
    });
  };

  const addCriterion = () => {
    const newCriterion = {
      id: criteria.length + 1,
      name: `Criterion ${criteria.length + 1}`,
      description: "",
      weight: 0,
    };
    setCriteria([...criteria, newCriterion]);
  };

  const removeCriterion = (id) => {
    setCriteria(criteria.filter((c) => c.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-auto">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-medium">Create New Scoring Rubric</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rubric Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={rubricName}
                  onChange={(e) => setRubricName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Assessment Tool
                </label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={selectedTool}
                  onChange={(e) => setSelectedTool(e.target.value)}
                  required
                >
                  <option value="">Select a tool</option>
                  {tools.map((tool) => (
                    <option key={tool} value={tool}>
                      {tool}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-sm font-medium text-gray-700">
                  Assessment Criteria
                </h4>
                <button
                  type="button"
                  onClick={addCriterion}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  + Add Criterion
                </button>
              </div>

              <div className="space-y-4">
                {criteria.map((criterion, index) => (
                  <div
                    key={criterion.id}
                    className="border rounded-md p-4 bg-gray-50"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium">Criterion {index + 1}</h5>
                      <button
                        type="button"
                        onClick={() => removeCriterion(criterion.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-3">
                        <label className="block text-xs text-gray-500 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={criterion.name}
                          onChange={(e) => {
                            const updated = [...criteria];
                            updated[index].name = e.target.value;
                            setCriteria(updated);
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">
                          Weight (%)
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          value={criterion.weight}
                          onChange={(e) => {
                            const updated = [...criteria];
                            updated[index].weight = parseInt(
                              e.target.value,
                              10
                            );
                            setCriteria(updated);
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-2">
                      <label className="block text-xs text-gray-500 mb-1">
                        Description / AI Prompt
                      </label>
                      <textarea
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        rows="2"
                        value={criterion.description}
                        onChange={(e) => {
                          const updated = [...criteria];
                          updated[index].description = e.target.value;
                          setCriteria(updated);
                        }}
                      ></textarea>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-3 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600"
            >
              Create Rubric
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Define missing component
const Download = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

export default AdminDashboard;
