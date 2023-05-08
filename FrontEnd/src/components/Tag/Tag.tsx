type TagProps = {
  text: string;
};
export default function Tag(props: TagProps) {
  return (
    <span className="px-3 py-1  rounded">
      <h6 className="text-accent-green-50 font-bold">{props.text}</h6>
    </span>
  );
}
