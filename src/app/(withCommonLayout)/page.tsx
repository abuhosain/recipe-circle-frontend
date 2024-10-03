import { SearchIcon } from "@/src/components/icons";
import { Input } from "@nextui-org/input";

export default function Home() {
  return (
    <section>
      <div className="max-w-xl  flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base  " />
            }
            type="text"
          />
        </form>
      </div>
      <hr className="w-full mt-3" />
    </section>
  );
}
