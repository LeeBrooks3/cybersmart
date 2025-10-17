import { css } from "@emotion/react";
import { Button } from "@leebrooks3/ui/components/aria/Button";
import { DialogTrigger } from "@leebrooks3/ui/components/aria/Dialog";
import { Link } from "@leebrooks3/ui/components/aria/Link";
import { Popover } from "@leebrooks3/ui/components/aria/Popover";
import { Separator } from "@leebrooks3/ui/components/aria/Separator";
import { Text } from "@leebrooks3/ui/components/aria/Text";
import { Icon } from "@leebrooks3/ui/components/icons/Icon";
import { Flex } from "@leebrooks3/ui/components/layout/Flex";
import { Navigation } from "@leebrooks3/ui/components/layout/Navigation";
import { ThemeSelector } from "@leebrooks3/ui/components/ThemeSelector";
import { Paragraph } from "@leebrooks3/ui/components/Typography";
import { ChevronDown } from "@leebrooks3/ui/icons";
import { themed } from "@leebrooks3/ui/tokens/theme";
import { DateTime, pipe } from "effect";
import type { PropsWithChildren } from "react";

import { Logo } from "~/components/Logo";

export const Layout = ({ children }: PropsWithChildren) => {
  const now = DateTime.unsafeNow();

  return (
    <Flex css={styles.site} flex={{ direction: "column" }}>
      <Flex css={styles.header} element={"header"} padding>
        <Flex
          container={"xl"}
          padding
          flex={{ direction: "column", m: { direction: "row", justifyContent: "space-between" } }}
        >
          <Link css={styles.logoLink} href={"/"}>
            <Logo height={"2rem"} />
          </Link>

          <Navigation flex={{ direction: "column", m: { direction: "row" } }}>
            <Link href={"/policies"}>
              <Text size={"l"}>Policies</Text>
            </Link>

            <DialogTrigger>
              <Button variant={"ghost"}>
                <Icon icon={ChevronDown} />
              </Button>

              <Popover>
                <ThemeSelector />

                <Separator />
              </Popover>
            </DialogTrigger>
          </Navigation>
        </Flex>
      </Flex>

      {children}

      <Flex element={"footer"} padding>
        <Flex container={"xl"} padding flex={{ direction: "column" }}>
          <Flex></Flex>
          <Flex
            flex={{
              direction: "column",
              justifyContent: "space-between",
              m: { direction: "row" },
            }}
          >
            <Paragraph>&copy; {pipe(now, DateTime.getPart("year"))} Lee Brooks. All rights reserved.</Paragraph>

            <Navigation flex={{ direction: "column", m: { direction: "row" } }}>
              <Link rel="privacy-policy" href="https://cybersmart.co.uk/privacy-policy/">
                Privacy Policy
              </Link>
              <Link href="https://cybersmart.co.uk/security/">Security</Link>
              <Link href="https://status.cybersmart.co.uk/">Status</Link>
              <Link href="https://cybersmart.co.uk/eula/">EULA</Link>
              <Link href="https://careers.cybersmart.co.uk/jobs/Careers">Careers</Link>
              <Link href="https://cybersmart.co.uk/insurance-cover/">Insurance Terms</Link>
              <Link href="https://cybersmart.co.uk/wp-content/uploads/2024/11/Modern-Slavery-Policy-Statement.pdf">
                Modern Slavery Policy
              </Link>
            </Navigation>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const styles = {
  site: css({
    height: "100vh",
    width: "100vw",
    backgroundColor: themed("--background-colour-secondary"),
  }),
  header: css({
    backgroundColor: themed("--background-colour-primary"),
  }),
  logoLink: css({
    display: "block",
  }),
  logo: css({
    display: "block",
    height: "2rem",
  }),
};
