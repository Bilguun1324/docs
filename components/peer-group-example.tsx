export const PeerGroupExample = () => {
  return (
    <div className="flex gap-4">
      <div className="peer p-8 bg-blue-600 group/name">
        Hover me
        <div className="group-hover:bg-red-600">Group Example 1</div>
        <div className="group-hover/name:bg-green-600">Group Example 2</div>
      </div>
      <div className="peer-hover:bg-cyan-400 flex items-center justify-center p-8">
        Group Example
      </div>
    </div>
  );
};
