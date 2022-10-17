import { Container, Title, Input } from "./SearchBar.style";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <Container>
      <Input
        placeholder="Search User"
        value={value}
        name="name"
        id="name"
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
}
