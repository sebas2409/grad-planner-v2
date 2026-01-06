// Types based on StudentSubaudit.json and AllCourses.json

export interface Course {
    CourseCodeId: number;
    CourseCode: string;
    Title: string;
    Description: string;
    MaxCreditHours: number;
    MinCreditHours: number;
    IsReligionCourse: boolean;
    isUpperDivision: boolean;
    IsRepeatable: boolean;
    MaximumRepeatableCreditHours: number;
    MaximumRepeatableTimes: number;
    IsAvailableOnline: boolean;
    IsAvailableCTED: boolean;
    DepartmentId: number;
    Department?: Department;
    CourseRequisites: CourseRequisite[];
}

export interface Department {
    Name: string;
    Description: string;
    ExternalId: string;
    CollegeId: number;
    Id: number;
}

export interface CourseRequisite {
    // Add requisite structure as needed
}

export interface AuditCourse {
    CatalogYear: string;
    CourseNumber: string;
    Title: string;
    Level: "LowerDivision" | "UpperDivision";
    MaximumCreditHours: number;
    MinimumCreditHours: number;
    HoursEarned: number;
    HoursInProgress: number;
    Status: number; // 4 = completed, etc.
    CalculatedCredit: number;
    CalculatedGrade: string;
    GradeEarned: string;
    GradeNeeded: string;
    IsMet: boolean;
    IsRequired: boolean;
    IsRepeated: boolean;
    Semester: string;
    WhenTakenSession: {
        Session: "Fall" | "Winter" | "Spring" | "Summer";
        Year: string;
        catalog: {
            catalogCode: string;
            year: number;
        };
    };
    SequenceKey: string;
    RequirementKey: string;
    SubauditKey: string;
    IsReligionInResidencyCourse: boolean;
    CourseErrorMessages: string[] | null;
    CourseWarningMessages: string[] | null;
}

export interface Sequence {
    RemainingCredits: number;
    RemainingCount: number;
    IsRequired: boolean;
    IsMet: boolean;
    Status: number;
    Courses: AuditCourse[];
}

export interface Requirement {
    Status: number;
    Sequences: Sequence[];
}

export interface SubAudit {
    ReligionKey: string;
    INumber: string;
    Requirements: Requirement[];
}

export interface DegreeAuditDetails {
    SubAudits: SubAudit[];
}

export interface StudentSubauditResponse {
    statusCode: number;
    degreeAuditDetails: DegreeAuditDetails;
}

// UI-specific types
export type CourseStatus = "completed" | "in-progress" | "planned" | "unplanned";
export type SemesterStatus = "ON-TRACK" | "OFF-TRACK" | "FLEX TRACK";
export type ColorVariant = "blue" | "green";

export interface PlanCourse {
    code: string;
    name: string;
    credits: number;
    colorVariant?: ColorVariant;
    subLabel?: string;
    status?: CourseStatus;
}

export interface PlanSemester {
    title: string;
    status: SemesterStatus;
    statusColor?: string;
    credits: number;
    courses: PlanCourse[];
}

export interface PlanYear {
    year: number;
    isCurrent?: boolean;
    semesters: PlanSemester[];
}
