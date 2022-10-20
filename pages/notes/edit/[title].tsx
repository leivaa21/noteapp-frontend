import { useRouter } from 'next/router'

const EditNote = () => {
  const router = useRouter()
  const { title } = router.query

  return <p>Edit: {title}</p>
}

export default EditNote;
