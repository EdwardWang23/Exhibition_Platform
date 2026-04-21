import ProjectDetailContent from './ProjectDetailContent'

export async function generateStaticParams() {
  return [{ id: '1' }]
}

export default function ProjectDetailPage() {
  return <ProjectDetailContent />
}
