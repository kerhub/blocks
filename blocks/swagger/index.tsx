import { FileBlockProps } from "@githubnext/blocks";
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function (props: FileBlockProps) {
  const { content } = props;

  return (
      <SwaggerUI spec={content} />
  );
}