export default async function About() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  return (
    <>
      <div>
        <h1 className="text-center text-5xl m-20 font-bold hover:text-blue-900">
          😍SYEDA MAHA ZAIDI😍
        </h1>
      </div>
      <h1 className="text-center text-4xl font-serif text-green-500">
        Hello About Page!
      </h1>
    </>
  );
}
