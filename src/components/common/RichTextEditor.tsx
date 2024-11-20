import React, { useState, useEffect } from 'react';
import { Editor, EditorState, convertToRaw, ContentState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import draftToMarkdown from 'draft-js-export-markdown';
import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface RichTextEditorProps {
  initialValue?: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ initialValue, onChange }) => {
  const [editorState, setEditorState] = useState(() =>
    initialValue
      ? EditorState.createWithContent(ContentState.createFromText(initialValue))
      : EditorState.createEmpty()
  );

  useEffect(() => {
    if (initialValue) {
      setEditorState(
        EditorState.createWithContent(ContentState.createFromText(initialValue))
      );
    }
  }, [initialValue]);

  const handleEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    const html = stateToHTML(newEditorState.getCurrentContent());
    const markdown = draftToMarkdown(convertToRaw(newEditorState.getCurrentContent()));
    onChange(markdown);
  };

  return (
    <div className="border border-gray-700 rounded-md">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        wrapperClassName="draft-js-wrapper"
        editorClassName="draft-js-editor bg-[#1C1C1E] text-white p-3"
        toolbarClassName="draft-js-toolbar bg-gray-800 text-white"
      />
    </div>
  );
};

export default RichTextEditor;