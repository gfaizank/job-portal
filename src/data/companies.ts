export interface CompaniesType {
  name: string;
  path: string;
  id: number;
}

export const companies: CompaniesType[] = [
  {
    name: "amazon",
    path: "/companies/amazon.svg",
    id: 1,
  },
  {
    name: "atlassian",
    path: "/companies/atlassian.svg",
    id: 2,
  },
  {
    name: "google",
    path: "/companies/google.webp",
    id: 3,
  },
  {
    name: "ibm",
    path: "/companies/ibm.svg",
    id: 4,
  },
  {
    name: "meta",
    path: "/companies/meta.svg",
    id: 5,
  },
  {
    name: "netflix",
    path: "/companies/netflix.png",
    id: 7,
  },
  {
    name: "uber",
    path: "/companies/uber.svg",
    id: 8,
  },
];
