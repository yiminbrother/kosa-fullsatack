
export default function ChildComponent({
  name,
  version=18,
  data,
  object,
  children
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 shadow-sm">
      <header className="border-b border-gray-200 bg-gray-50 px-5 py-3">
        <h2 className="text-lg font-semibold">ChildComponent</h2>
      </header>
      <div className="space-y-5 p-5">
        <p>{name}</p>
        <p>{version}</p>
        <div>{children}</div>
        <ul>
          {object.map((value, index)=>(
            <li key={index}>{index+1} : {value}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
