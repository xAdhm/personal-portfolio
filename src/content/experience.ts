export type Experience = {
  role: string;
  organization: string;
  dates: string;
  description: string;
};

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    organization: "Rise and Shine ABA",
    dates: "Jun to Aug 2026",
    description:
      "Built the backend for an internal HR platform: API routes, role-based access, field-level encryption, and audit logging.",
  },
  {
    role: "Computer Science Intern",
    organization: "Runwei",
    dates: "Mar to May 2026",
    description:
      "Scored 3 AI search visibility platforms against 8 criteria, mapped the grant recommendation pipeline, and proposed a hybrid retrieval approach for better match reasons.",
  },
];
