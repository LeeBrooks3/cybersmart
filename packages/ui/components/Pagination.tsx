/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

import { spacing } from "../tokens/spacing";
import { themed } from "../tokens/theme";
import { Group } from "./aria/Group";
import type { LinkColourScheme, LinkVariant } from "./aria/Link";
import { Link } from "./aria/Link";
import { Separator } from "./aria/Separator";
import { Text } from "./aria/Text";
import { Toolbar } from "./aria/Toolbar";
import { Icon } from "./icons/Icon";
import { Paragraph } from "./Typography";

export interface PaginationProps {
  search: URLSearchParams;
  limit: number;
  page: number;
  total: number;
  colourScheme?: LinkColourScheme;
  variant?: LinkVariant;
}

export const Pagination = ({
  search,
  limit,
  page,
  total,
  colourScheme = "neutral",
  variant = "ghost",
}: PaginationProps) => {
  const pages = Math.ceil(total / limit);

  const href = useCallback(
    (page: number) => {
      const params = new URLSearchParams(search);

      params.set("page", page.toString());

      return `?${params.toString()}`;
    },
    [search],
  );

  return (
    <Toolbar css={styles.toolbar}>
      <Paragraph>
        Showing results{" "}
        <Text element={"strong"}>
          {page * limit - (limit - 1)} - {page * limit}
        </Text>{" "}
        of <Text element={"strong"}>{total}</Text> total
      </Paragraph>

      <Group css={styles.group}>
        <Link
          aria-label={"previous"}
          css={styles.chevron}
          href={href(page - 1)}
          isDisabled={page === 1}
          colourScheme={colourScheme}
          variant={variant}
        >
          <Icon icon={ChevronLeft} />
        </Link>

        <Separator orientation="vertical" />

        <Group css={styles.group}>
          {page > 1 && (
            <>
              <Link css={styles.pageNumber} href={href(1)} colourScheme={colourScheme} variant={variant}>
                1
              </Link>
              {page > 2 && <Text css={styles.ellipsis}>...</Text>}
            </>
          )}

          <Link css={styles.pageNumber} href={href(page)} data-selected colourScheme={colourScheme} variant={variant}>
            {page}
          </Link>

          {page < pages && (
            <>
              {page < pages - 1 && <Text css={styles.ellipsis}>...</Text>}
              <Link css={styles.pageNumber} href={href(pages)} colourScheme={colourScheme} variant={variant}>
                {pages}
              </Link>
            </>
          )}
        </Group>

        <Separator orientation="vertical" />

        <Link
          aria-label={"next"}
          css={styles.chevron}
          href={href(page + 1)}
          isDisabled={page === pages}
          colourScheme={colourScheme}
          variant={variant}
        >
          <Icon icon={ChevronRight} />
        </Link>
      </Group>
    </Toolbar>
  );
};

const styles = {
  toolbar: css({
    justifyContent: "space-between",
  }),
  group: css({
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: spacing.xs,
  }),
  chevron: css({
    padding: spacing.xs,
  }),
  ellipsis: css({
    padding: `0 ${spacing.xs}`,
  }),
  pageNumber: css({
    "&[data-selected=true]": {
      background: themed("--highlight-bg-selected"),
      colour: themed("--highlight-colour-selected"),
    },
  }),
};
