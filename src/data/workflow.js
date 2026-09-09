export const workflowSteps = [
  {
    step: '01',
    title: 'Conceptual Design',
    description: 'Defining project feasibility, preliminary scope, and initial engineering blueprints.',
    details: [
      'Site geotechnical evaluation & environmental impact studies',
      'Preliminary CapEx/OpEx financial forecasting',
      'FEED (Front-End Engineering Design) stage gates',
      'Stakeholder alignment & statutory zoning approvals'
    ]
  },
  {
    step: '02',
    title: 'Detail Engineering',
    description: 'Rigorous technical specifications and multi-disciplinary design coordination.',
    details: [
      'Multi-disciplinary 3D BIM coordination (Civil, Mech, Elec, Piping)',
      'Finite element stress analysis & structural simulations',
      'Instrumentation & automated control loop architecture',
      'Hazard and Operability (HAZOP) peer reviews'
    ]
  },
  {
    step: '03',
    title: 'Global Procurement',
    description: 'Strategic sourcing of materials and equipment from vetted global vendors.',
    details: [
      'Pre-qualification of certified tier-1 global equipment OEMs',
      'Expediting and in-factory quality surveillance (FAT tests)',
      'Heavy-lift intermodal ocean & overland logistics routing',
      'Material traceability & mill test certification tracking'
    ]
  },
  {
    step: '04',
    title: 'Construction',
    description: 'On-site execution managed by expert supervisors with stringent quality controls.',
    details: [
      'Turnkey site civil earthworks & deep foundation pilings',
      'Heavy crane rigging and modular component lifting',
      'Zero-tolerance safety enforcement under OSHA & ISO standards',
      'Continuous drone photogrammetry & BIM progress validation'
    ]
  },
  {
    step: '05',
    title: 'Commissioning',
    description: 'System testing, operator training, and final handover for operational readiness.',
    details: [
      'Cold & hot loop checks and system hydrostatic pressure testing',
      'Control system SCADA validation & telemetry sign-off',
      'Client staff operational & emergency response training',
      'Comprehensive as-built BIM digital twin documentation'
    ]
  }
];

export const commitments = [
  {
    id: 'safety',
    title: 'Safety First Culture',
    description: 'Implementing rigorous OSHA and international safety protocols to ensure a zero-incident workplace across all active job sites.',
    icon: 'ShieldCheck',
    metrics: '0.00 Total Recordable Incident Rate (TRIR)'
  },
  {
    id: 'compliance',
    title: 'Technical Compliance',
    description: 'Every project undergoes multi-stage technical audits and quality assurance benchmarks under ISO 9001:2015 accreditation.',
    icon: 'CheckCircle2',
    metrics: '100% Third-Party Audited Quality Systems'
  }
];

export const partners = [
  { name: 'PARTNER 1', sector: 'Heavy Machinery & Cranes' },
  { name: 'PARTNER 2', sector: 'High-Grade Steel Fabrication' },
  { name: 'PARTNER 3', sector: 'Industrial Automation & SCADA' },
  { name: 'PARTNER 4', sector: 'Global Maritime Logistics' },
  { name: 'PARTNER 5', sector: 'Clean Energy Technologies' },
  { name: 'PARTNER 6', sector: 'Geotechnical Engineering' }
];
