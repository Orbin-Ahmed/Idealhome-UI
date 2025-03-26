import React, { createContext, Fragment, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

interface TextSplitContextType {
  lastIndex: number;
  newHighlight: string | string[];
  highlightSeparator: string;
  renderText: (text: string, isLast: boolean) => React.ReactNode;
  renderSeparator: () => React.ReactNode;
  renderHighlight: (
    highlightedText: string,
    isLast: boolean,
    className: string
  ) => React.ReactNode;
  renderNonHighlight: (
    nonHighlightedText: string,
    isLast: boolean
  ) => React.ReactNode;
  highlightClassName: string;
  isString: boolean;
}

const TextSplitContext = createContext<TextSplitContextType>(
  {} as TextSplitContextType
);

interface RenderProps {
  splittedText?: string;
  index: number;
}

const Render: React.FC<RenderProps> = ({ splittedText = "", index }) => {
  const {
    lastIndex,
    newHighlight,
    highlightSeparator,
    renderText,
    renderHighlight,
    renderNonHighlight,
    highlightClassName,
    isString,
  } = useContext(TextSplitContext);

  const newT = splittedText.trim();
  const lowerT = newT.toLowerCase();
  let isHave: boolean = false;
  if (isString) {
    isHave = lowerT.includes(newHighlight as string);
  } else {
    isHave = (newHighlight as string[]).some((it) =>
      lowerT.includes(it.toLowerCase())
    );
  }

  if ((newHighlight as string | string[]).length && isHave) {
    if (isString && lowerT === (newHighlight as string)) {
      return (
        <>{renderHighlight?.(newT, index === lastIndex, highlightClassName)}</>
      );
    }
    const highlightInArr = newT.split(highlightSeparator);
    const highlightInArrLast = highlightInArr.length - 1;
    return (
      <>
        {highlightInArr.map((st, j) => (
          <Fragment key={j}>
            {isString && st.toLowerCase() === (newHighlight as string)
              ? renderHighlight?.(
                  st,
                  highlightInArrLast === j,
                  highlightClassName
                )
              : !isString &&
                (newHighlight as string[]).some(
                  (it) => st.toLowerCase() === it.toLowerCase()
                )
              ? renderHighlight?.(
                  st,
                  highlightInArrLast === j,
                  highlightClassName
                )
              : renderNonHighlight?.(st, highlightInArrLast === j)}
            {highlightSeparator}
          </Fragment>
        ))}
      </>
    );
  }
  return <>{renderText?.(newT, index === lastIndex)}</>;
};

interface TextSplitItemProps {
  splittedText?: string;
  index: number;
}

const TextSplitItem: React.FC<TextSplitItemProps> = ({
  splittedText = "",
  index,
}) => {
  const { lastIndex, renderSeparator } = useContext(TextSplitContext);

  return (
    <Fragment>
      <Render splittedText={splittedText} index={index} />{" "}
      {index !== lastIndex && renderSeparator?.()}
    </Fragment>
  );
};

interface TextSplitProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  separator?: string;
  children?: string;
  highlight?: string | string[];
  highlightSeparator?: string;
  highlightClassName?: string;
  as?: React.ElementType;
  renderText?: (text: string, isLast: boolean) => React.ReactNode;
  renderSeparator?: () => React.ReactNode;
  renderHighlight?: (
    highlightedText: string,
    isLast: boolean,
    className: string
  ) => React.ReactNode;
  renderNonHighlight?: (
    nonHighlightedText: string,
    isLast: boolean
  ) => React.ReactNode;
}

const TextSplit: React.FC<TextSplitProps> = ({
  text = "",
  separator = "\n",
  children = "",
  highlight = "",
  highlightSeparator = " ",
  highlightClassName = "",
  as: Tag = Fragment,
  renderText = (text: string, isLast: boolean) => text,
  renderSeparator = () => <br />,
  renderHighlight = (
    highlightedText: string,
    isLast: boolean,
    className: string
  ) => <span className={className}>{highlightedText}</span>,
  renderNonHighlight = (nonHighlightedText: string, isLast: boolean) =>
    nonHighlightedText,
  ...props
}) => {
  const newText = children || text;
  const arr = newText.split(separator);
  const lastIndex = arr.length - 1;
  let newHighlightValue: string | string[] = highlight;
  const isString = typeof highlight === "string";
  if (isString) {
    newHighlightValue = (highlight as string).toLowerCase();
  }

  const contextValue: TextSplitContextType = {
    lastIndex,
    newHighlight: newHighlightValue,
    highlightSeparator,
    renderText,
    renderSeparator,
    renderHighlight,
    renderNonHighlight,
    highlightClassName,
    isString,
  };

  return (
    <TextSplitContext.Provider value={contextValue}>
      <Tag {...props}>
        {arr.map((splittedText, index) => (
          <TextSplitItem
            key={uuidv4()}
            index={index}
            splittedText={splittedText}
          />
        ))}
      </Tag>
    </TextSplitContext.Provider>
  );
};

export default TextSplit;
