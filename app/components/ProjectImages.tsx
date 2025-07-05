"use client"

interface ProjectImageProps {
  type: "ml" | "web" | "system" | "kernel"
  className?: string
}

export function ProjectImage({ type, className = "" }: ProjectImageProps) {
  const renderMLImage = () => (
    <div
      className={`w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center ${className}`}
    >
      <svg width="120" height="80" viewBox="0 0 120 80" className="text-white">
        {/* Neural Network Nodes */}
        <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.8" />
        <circle cx="20" cy="40" r="4" fill="currentColor" opacity="0.8" />
        <circle cx="20" cy="60" r="4" fill="currentColor" opacity="0.8" />

        <circle cx="60" cy="15" r="4" fill="currentColor" />
        <circle cx="60" cy="30" r="4" fill="currentColor" />
        <circle cx="60" cy="45" r="4" fill="currentColor" />
        <circle cx="60" cy="60" r="4" fill="currentColor" />

        <circle cx="100" cy="25" r="4" fill="currentColor" opacity="0.9" />
        <circle cx="100" cy="45" r="4" fill="currentColor" opacity="0.9" />

        {/* Connections */}
        <line x1="24" y1="20" x2="56" y2="15" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="24" y1="20" x2="56" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="24" y1="40" x2="56" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="24" y1="40" x2="56" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="24" y1="60" x2="56" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="24" y1="60" x2="56" y2="60" stroke="currentColor" strokeWidth="1" opacity="0.6" />

        <line x1="64" y1="15" x2="96" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="64" y1="30" x2="96" y2="25" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="64" y1="45" x2="96" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="64" y1="60" x2="96" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.6" />

        {/* Data flow animation */}
        <circle cx="20" cy="20" r="2" fill="#60a5fa" opacity="0.8">
          <animate attributeName="cx" values="20;60;100" dur="2s" repeatCount="indefinite" />
          <animate attributeName="cy" values="20;30;25" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="absolute bottom-2 left-2 text-xs font-semibold text-white/80">ML Dashboard</div>
    </div>
  )

  const renderWebImage = () => (
    <div
      className={`w-full h-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center ${className}`}
    >
      <svg width="100" height="70" viewBox="0 0 100 70" className="text-white">
        {/* Browser Window */}
        <rect
          x="5"
          y="10"
          width="90"
          height="55"
          rx="4"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* Browser Header */}
        <rect x="5" y="10" width="90" height="12" rx="4" fill="currentColor" opacity="0.2" />
        <circle cx="12" cy="16" r="2" fill="#ff5f56" />
        <circle cx="20" cy="16" r="2" fill="#ffbd2e" />
        <circle cx="28" cy="16" r="2" fill="#27ca3f" />

        {/* Content Areas */}
        <rect x="12" y="28" width="76" height="8" rx="2" fill="currentColor" opacity="0.3" />
        <rect x="12" y="40" width="35" height="18" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="52" y="40" width="36" height="8" rx="1" fill="currentColor" opacity="0.15" />
        <rect x="52" y="50" width="28" height="8" rx="1" fill="currentColor" opacity="0.15" />

        {/* Animated Elements */}
        <rect x="12" y="28" width="0" height="8" rx="2" fill="#60a5fa">
          <animate attributeName="width" values="0;76;76" dur="3s" repeatCount="indefinite" />
        </rect>
      </svg>
      <div className="absolute bottom-2 left-2 text-xs font-semibold text-white/80">Web Interface</div>
    </div>
  )

  const renderSystemImage = () => (
    <div
      className={`w-full h-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center ${className}`}
    >
      <svg width="100" height="80" viewBox="0 0 100 80" className="text-white">
        {/* CPU Representation */}
        <rect
          x="20"
          y="20"
          width="60"
          height="40"
          rx="4"
          fill="currentColor"
          opacity="0.1"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* CPU Cores */}
        <rect x="25" y="25" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="40" y="25" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="55" y="25" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="70" y="25" width="5" height="12" rx="1" fill="currentColor" opacity="0.3" />

        {/* Memory Bars */}
        <rect x="25" y="45" width="50" height="4" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="25" y="52" width="50" height="4" rx="2" fill="currentColor" opacity="0.2" />

        {/* Activity Indicators */}
        <rect x="25" y="45" width="0" height="4" rx="2" fill="#10b981">
          <animate attributeName="width" values="0;35;20;45;10" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="25" y="52" width="0" height="4" rx="2" fill="#f59e0b">
          <animate attributeName="width" values="0;25;40;15;30" dur="2.5s" repeatCount="indefinite" />
        </rect>

        {/* Connection Lines */}
        <line x1="10" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="80" y1="40" x2="90" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="50" y1="60" x2="50" y2="70" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
      <div className="absolute bottom-2 left-2 text-xs font-semibold text-white/80">System Monitor</div>
    </div>
  )

  const renderKernelImage = () => (
    <div
      className={`w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center ${className}`}
    >
      <svg width="100" height="80" viewBox="0 0 100 80" className="text-white">
        {/* Kernel Core */}
        <circle cx="50" cy="40" r="15" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
        <circle cx="50" cy="40" r="8" fill="currentColor" opacity="0.3" />

        {/* Process Rings */}
        <circle
          cx="50"
          cy="40"
          r="25"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
          strokeDasharray="3,2"
        />
        <circle
          cx="50"
          cy="40"
          r="35"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.2"
          strokeDasharray="5,3"
        />

        {/* Process Nodes */}
        <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="75" cy="25" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="25" cy="55" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="75" cy="55" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="15" cy="40" r="3" fill="currentColor" opacity="0.8" />
        <circle cx="85" cy="40" r="3" fill="currentColor" opacity="0.8" />

        {/* Data Flow Lines */}
        <line x1="25" y1="25" x2="42" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="75" y1="25" x2="58" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="25" y1="55" x2="42" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <line x1="75" y1="55" x2="58" y2="48" stroke="currentColor" strokeWidth="1" opacity="0.4" />

        {/* Animated Data Packets */}
        <circle cx="25" cy="25" r="1" fill="#60a5fa">
          <animateMotion dur="3s" repeatCount="indefinite">
            <path d="M 0,0 Q 12,-8 25,15" />
          </animateMotion>
        </circle>

        {/* Memory Segments */}
        <rect x="45" y="5" width="10" height="3" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="45" y="72" width="10" height="3" rx="1" fill="currentColor" opacity="0.4" />
      </svg>
      <div className="absolute bottom-2 left-2 text-xs font-semibold text-white/80">Kernel Module</div>
    </div>
  )

  switch (type) {
    case "ml":
      return renderMLImage()
    case "web":
      return renderWebImage()
    case "system":
      return renderSystemImage()
    case "kernel":
      return renderKernelImage()
    default:
      return renderWebImage()
  }
}
