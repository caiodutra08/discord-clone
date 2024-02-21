interface SeparatorProps {
  width?: string;
}

export const Separator = ({ width }: SeparatorProps) => {
  return (
    <div style={{ height: "1px", width: width, backgroundColor: "gray" }}></div>
  );
};
