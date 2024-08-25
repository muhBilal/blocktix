"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import { useRouter } from "next/navigation";

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

  return (
    <div className="-mx-[54px]">
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
