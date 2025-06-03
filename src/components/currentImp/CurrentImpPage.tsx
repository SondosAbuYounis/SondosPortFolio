import React from "react";
import {
  HeadingFour,
  SubHeading,
  SmallBodyTypography,
  ExtraSmallBodyTypography,
} from "../typography";
import Link from "next/link";

function CurrentImpPage() {
  return (
    <div className="flex md:flex-row sm:flex-col items-center sm:p-5 md:p-0 gap-10 ">
      <div className="flex md:flex-row sm:flex-col gap-5  md:items-start  md:justify-items-start sm:items-center  sm:justify-items-center">
        <div className="md:min-h-[355px] sm:min-h-fit flex items-center justify-center">
          <div className=" w-[34px] flex items-center justify-center">
            <HeadingFour className="leading-[34px] md:-rotate-90 whitespace-nowrap ">
              Welcome Aboard !
            </HeadingFour>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <SmallBodyTypography className="h-fit md:w-54 sm:w-72 leading-10 md:text-justify sm:text-center">
            I am still working on this project, yet I humbly present a first
            draft prototype
          </SmallBodyTypography>
          <SubHeading className="text-RedAccent md:text-justify sm:text-center">
            feel free to steer it =D
          </SubHeading>
          <div className="flex flex-col gap-2">
            <SmallBodyTypography className="h-fit md:w-54 sm:w-72 leading-10 font-semiBoldFont md:text-start sm:text-center">
              You can navigate my first portfolio:
            </SmallBodyTypography>
            <Link
              href={
                "https://sondosabuyounis.github.io/myFirstPortFolio/index.html#homePage"
              }
            >
              <ExtraSmallBodyTypography className="underline md:w-54 sm:w-72 hover:text-RedAccent md:text-justify sm:text-center">
                Sondos AbuYounis - Portfolio 23
              </ExtraSmallBodyTypography>
            </Link>
          </div>

          <div className="flex flex-col gap-0.5">
            <SubHeading className="text-GreenAccent md:w-54 sm:w-72 md:text-justify sm:text-center">
              Find Attached
            </SubHeading>
            <ul style={{ listStyleType: "disc", padding: "15px" }}>
              <li>
                <ExtraSmallBodyTypography>
                  <span className="font-semiBoldFont">
                    Portfolio Figma Design:
                  </span>
                  <span>
                    <Link
                      href={
                        "https://www.figma.com/design/AJq5NXp3ul8jGyRJq9w6Cq/portFolio%6025?node-id=202-87&t=EhtA5q2cfPjNTRRb-1"
                      }
                    >
                      <ExtraSmallBodyTypography className="underline md:w-54 sm:w-72 hover:text-RedAccent md:text-justify sm:text-center">
                        Portfolio 25 - Design
                      </ExtraSmallBodyTypography>
                    </Link>
                  </span>
                </ExtraSmallBodyTypography>
              </li>
              <li>
                <ExtraSmallBodyTypography>
                  <span className="font-semiBoldFont">
                    My Design Signature:
                  </span>
                  <span>
                    <Link
                      href={
                        "https://www.figma.com/deck/HEaJDWEGmulwgwRG9j6WNB/DesignSignature?node-id=1-78&t=k7K3y2lN7l9S3ITh-1"
                      }
                    >
                      <ExtraSmallBodyTypography className="underline md:w-54 sm:w-72 hover:text-RedAccent md:text-justify sm:text-center">
                        Sondos AbuYounis - Design Signature
                      </ExtraSmallBodyTypography>
                    </Link>
                  </span>
                </ExtraSmallBodyTypography>
              </li>
              <li>
                <ExtraSmallBodyTypography>
                  <span className="font-semiBoldFont">My Resume:</span>
                  <span>
                    <Link
                      href={
                        "https://www.figma.com/design/iCGjVjiu4n9yIFwoUyCq30/CV?node-id=2-18&t=eYelB7uj97arxL8N-1"
                      }
                    >
                      <ExtraSmallBodyTypography className="underline md:w-54 sm:w-72 hover:text-RedAccent md:text-justify sm:text-center">
                        Sondos AbuYounis - Resume
                      </ExtraSmallBodyTypography>
                    </Link>
                  </span>
                </ExtraSmallBodyTypography>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <iframe
        width="400"
        height="600"
        allowFullScreen={true}
        src="https://embed.figma.com/proto/AJq5NXp3ul8jGyRJq9w6Cq/portFolio%6025?node-id=394-902&p=f&scaling=scale-down&content-scaling=fixed&page-id=202%3A177&starting-point-node-id=394%3A902&embed-host=share"
      ></iframe>
    </div>
  );
}

export default CurrentImpPage;
