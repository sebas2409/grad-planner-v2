# Plan Details Components

This folder contains the Plan Details page and its modular components.

## File Structure

```
planDetails/
├── components/
│   ├── index.ts               # Barrel export file
│   ├── StatItem.tsx          # Individual stat display (Completed, In-Progress, etc.)
│   ├── CourseCard.tsx        # Course card component (blue/green cards)
│   ├── SemesterColumn.tsx    # Semester column with courses
│   ├── ReqCourseItem.tsx     # Requirement course list item
│   ├── PlanStatsBar.tsx      # Top navigation bar with stats
│   ├── PlanHeader.tsx        # Plan name and status header
│   ├── PlanControls.tsx      # Controls for credits, copy, download
│   ├── RequirementsPanel.tsx # Right sidebar with requirements
│   └── YearView.tsx          # Collapsible year view with semesters
├── AllCourses.json           # Complete course catalog
├── StudentSubaudit.json      # Student degree audit data
├── types.ts                  # TypeScript type definitions
├── page.tsx                  # Main page component
└── README.md                 # This file
```

## Data Sources

### AllCourses.json
Contains the complete course catalog with:
- Course codes and titles
- Credit hours (min/max)
- Department information
- Course descriptions
- Prerequisites
- Online/CTED availability

### StudentSubaudit.json
Contains student degree audit information with:
- Requirements and sequences
- Completed courses with grades
- Planned/enrolled courses
- Semester information
- Course status (completed, in-progress, planned)
- Progress tracking

## Component Overview

### StatItem
Displays a single statistic (label + value).

**Props:**
- `label`: string - Stat label
- `value`: string | number - Stat value
- `color`: string - Tailwind color class
- `bold`: boolean - Whether to bold the value

### CourseCard
Blue or green course card displayed in semester columns.

**Props:**
- `code`: string - Course code (e.g., "CSE 111")
- `name`: string - Course name
- `credits`: number - Credit hours
- `colorVariant`: "blue" | "green" - Card color
- `subLabel`: string - Optional label (e.g., "Variable Credit")
- `onClick`: function - Click handler

**Color Meaning:**
- Blue: Completed/enrolled courses
- Green: Planned courses

### SemesterColumn
Displays a semester with its courses.

**Props:**
- `title`: string - Semester name
- `status`: string - Track status
- `credits`: number - Total credits
- `children`: ReactNode - Course cards
- `statusColor`: string - Status badge color
- `onShiftSemester`: function - Shift semester handler

### ReqCourseItem
Course item in the requirements list.

**Props:**
- `code`: string - Course code
- `name`: string - Course name
- `credits`: number - Credit hours
- `status`: "completed" | "planned" | "unplanned"
- `onRemove`: function - Remove handler
- `onViewDetails`: function - View details handler

### PlanStatsBar
Top navigation bar with plan statistics.

**Props:**
- `stats`: PlanStats - Statistics object
  - `completed`: number
  - `inProgress`: number
  - `planned`: number
  - `unplanned`: number
  - `total`: number
- `onMyPlansClick`: function - My Plans button handler
- `onSeeDetailsClick`: function - See Details button handler

### PlanHeader
Displays plan name and status.

**Props:**
- `planName`: string - Name of the plan
- `status`: string - Status text (e.g., "Declared Plan")
- `statusColor`: string - Color class for status

### PlanControls
Control bar for credits and actions.

**Props:**
- `minCredits`: number - Minimum credits per semester
- `maxCredits`: number - Maximum credits per semester
- `onEditCredits`: function - Edit credits handler
- `onCopyPlanning`: function - Copy planning handler
- `onDownloadPDF`: function - Download PDF handler

### RequirementsPanel
Right sidebar with requirements and progress.

**Props:**
- `categories`: Array - Requirement categories
- `activeCategory`: string - Currently active category
- `progress`: Object - Progress tracking
  - `completed`: number
  - `planned`: number
  - `total`: number
- `courses`: Array - List of requirement courses
- `onCategoryChange`: function - Category change handler
- `onSearch`: function - Search handler

### YearView
Collapsible year view with semesters.

**Props:**
- `year`: number - Year number
- `isCurrent`: boolean - Is this the current year
- `isExpanded`: boolean - Is the view expanded
- `semesters`: Array<Semester> - List of semesters
- `onToggle`: function - Toggle expand/collapse
- `onViewSingleSemester`: function - View single semester handler

## Usage Example

```tsx
import {
  PlanStatsBar,
  PlanHeader,
  YearView,
  RequirementsPanel,
  type PlanStats,
  type Semester
} from "./components";

const stats: PlanStats = {
  completed: 46.5,
  inProgress: 13,
  planned: 70,
  unplanned: 0,
  total: 129.5
};

const semesters: Semester[] = [
  {
    title: "Winter 2026",
    status: "ON-TRACK",
    credits: 13,
    courses: [...]
  }
];

function MyPage() {
  return (
    <div>
      <PlanStatsBar stats={stats} />
      <PlanHeader planName="CS + BM Minor" status="Declared Plan" />
      <YearView year={2026} semesters={semesters} />
      <RequirementsPanel ... />
    </div>
  );
}
```

## Future Enhancements

1. **Data Integration**: Connect components to actual API/JSON data
2. **State Management**: Add global state for plan data
3. **Drag & Drop**: Allow dragging courses between semesters
4. **Course Details Modal**: Show detailed course information
5. **Print Functionality**: Implement PDF download
6. **Accessibility**: Add ARIA labels and keyboard navigation
7. **Animations**: Add smooth transitions for collapsible sections
