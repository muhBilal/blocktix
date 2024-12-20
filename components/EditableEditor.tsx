"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

type Props = {
  onChange: (value?: string) => void;
  value?: string;
};

const EditableEditor = ({ onChange, value }: Props) => {
  const editor = useCreateBlockNote();

  const { theme } = useTheme();
  const blockNoteTheme =
    theme === "light" || theme === "dark" ? theme : "light";

  const handleChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);

    if (html == undefined || html == "") {
      return;
    }

    onChange(html);
  };

  const handleConvertHtmlToBlock = async () => {
    const blocks = await editor.tryParseHTMLToBlocks(value ?? "");
    editor.replaceBlocks(editor.document, blocks);
  };

  if (value) {
    handleConvertHtmlToBlock();
  }

  return (
    <div className="-mx-[40px]">
      <BlockNoteView
        editor={editor}
        theme={blockNoteTheme}
        editable={true}
        onChange={handleChange}
      />
    </div>
  );
};

export default EditableEditor;
