import React, { useRef } from "react";

import { Editor } from "@tinymce/tinymce-react";

export const EditorComponent = (props) => {
  return (
    <Editor
      // initialValue="<p>Type something here...</p>"
      apiKey="s3lkka8crsdddj4n1uo2qfldx61oxxbh75vac2wvk96zfssm"
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "undo redo | formatselect | " +
          "bold italic backcolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      {...props}
    />
  );
};
