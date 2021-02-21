import * as fs from "fs";
import * as CodeGenerator from "@himenon/openapi-typescript-code-generator";

const main = () => {
  const params: CodeGenerator.Params = {
    entryPoint: "./docker-compose.development.yml",
  };
  const code = CodeGenerator.generateTypeScriptCode(params);
  fs.writeFileSync("/types/api-schema.ts", code, { encoding: "utf-8" });
};

main();
