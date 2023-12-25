import fs from "fs";

// Creates a folder and writes the file
export const writeFile = (openFolder: string, contents: string): void => {
  if (!openFolder) return;
  if (!contents) return;

  try {
    const f: Array<string> = openFolder.split("/");
    const fileName: string = f.pop() || "";
    const folder: string = f.join("/");
    const hasFolder: boolean = fs.existsSync(folder);
    const minifiedContents: string = contents.replace(/\s/g, "");

    if (!hasFolder) {
      fs.mkdirSync(folder);
    }

    fs.writeFileSync(openFolder, minifiedContents);

    return getStats(openFolder, fileName, minifiedContents);
  } catch (error) {
    return console.error(error);
  }
};

// Gets the file statistics
export const getStats = (folder: string, fileName: string, content: string) => {
  fs.stat(folder, (error: any, stats: any) => {
    if (error) return console.log(`File doesn't exist.`);

    console.log(`⤒ ${fileName}: ${stats?.size} bytes`);
  });
};
