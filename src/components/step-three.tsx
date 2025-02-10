import { Button, Image } from "@chakra-ui/react";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "./ui/file-upload";
import { HiUpload } from "react-icons/hi";

const StepThree = () => {
  return (
    <div class="flex items-center justify-between w-[500px] gap-5">
      <Image
        src="https://bit.ly/naruto-sage"
        boxSize="150px"
        borderRadius="full"
        fit="cover"
        alt="Naruto Uzumaki"
        mr="5"
      />
      <FileUploadRoot accept={["image/png"]}>
        <FileUploadTrigger asChild>
          <Button variant="outline" size="sm">
            <HiUpload /> Upload file
          </Button>
        </FileUploadTrigger>
        <FileUploadList />
      </FileUploadRoot>
    </div>
  );
};

export default StepThree;
