export const PeerGroupExample = () => {
  return (
    <div className="flex gap-4">
      <div className="peer p-8 bg-blue-600 group">
        Hover me
        <div className=" group-hover:bg-red-600">Group Example</div>
      </div>
      <div className="peer-hover:bg-cyan-400 flex items-center justify-center">
        Group Example
      </div>
    </div>
  );
};
