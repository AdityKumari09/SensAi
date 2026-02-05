const CoverLetter= async ({ params }) => {
  const {id }= await params;
  return <div>CoverLetter: {id}</div>
}

export default CoverLetter;

/*  params is an object automatically provided by Next.js.
    It contains all dynamic route segments from the URL     */