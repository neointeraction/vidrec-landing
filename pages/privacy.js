import React, { useEffect } from "react";
import Head from "next/head";

import { Container, Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { blockAnimation } from "animation/variables";

import { Typography, ExploreBanner } from "components";

const Privacy = () => {
  const comparison = useAnimation();

  const [refComparison, inViewComparison] = useInView();

  useEffect(() => {
    if (inViewComparison) {
      comparison.start("visible");
    }
  }, [comparison, inViewComparison]);

  return (
    <div>
      <div className="section-margin mt-2 candidate-banner">
        <Container>
          <Head>
            <title>VidRec | Privacy</title>
            <meta name="description" content="VidRec web" />
          </Head>
          <Row>
            <Col xs={12}>
              <motion.div animate={{ y: [-100, 0], opacity: [0, 1] }}>
                <Typography level="h1" text={<>Privacy Policy</>} />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-margin">
        <Container>
          {/* <motion.div
            ref={refComparison}
            initial="hidden"
            animate={comparison}
            variants={titleAnimation}
          >
            <Typography level="h2" text={<>Privacy Policy</>} />
          </motion.div> */}
          <motion.div
            ref={refComparison}
            initial="hidden"
            animate={comparison}
            variants={blockAnimation}
          >
            <div className="margin-container">
              <div className="privacy-section mb-2">
                <Typography
                  level="h2"
                  text={<>UX Design Agency Terms and Conditions</>}
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Neointeraction Design agency is pleased to set out their
                      Terms and Conditions, which will apply to the work we do
                      for our client. These Terms and Conditions and the
                      Quote/Production Estimate supplied to you form the
                      contract between us for the provision of Neointeraction
                      Design Agency’s services and in the event of any dispute
                      are governed by the laws of India.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography level="h2" text={<>Product Name’s Role</>} />
                <Typography
                  level="p1"
                  text={
                    <>
                      Neointeraction Design Agency will provide the services
                      described in the Quote/Production Estimate as presented to
                      our client. As an assignment develops, it may be that the
                      scope of the required work changes. Where this is the
                      case, Neointeraction Design will seek to discuss it with
                      the client at the earliest opportunity in order to agree
                      upon any variations to the scope of the Services and the
                      Quote/Production Estimate, which may be necessary.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Author's Corrections. Unless specified in the
                      Quote/Proposal, we include 2 rounds of changes on all
                      items following the presentation of an initial concept.
                      Revisions briefed thereafter will be charged according to
                      Neointeraction Design’s standard hourly or fixed rate
                      card.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Information: To maximize Neointeraction Design Agency’s
                      effectiveness we must work with you as a team. Often
                      Neointeraction Design Agency’s work will be dependent on
                      you (or your other advisers) providing information
                      promptly. To avoid unnecessary verification,
                      Neointeraction Design Agency will assume all information
                      you provide is complete and accurate unless you tell us
                      otherwise.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Termination: Should you wish to terminate the contract
                      after the commencement of work, you will be invoiced for
                      work already completed.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Force Majeure: Neointeraction Design Agency shall not be
                      liable for any delay or failure to perform their
                      obligations where such delay or failure to perform arises
                      from circumstances outside Neointeraction Design Agency’s
                      reasonable control.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography level="h2" text={<>Payment Terms</>} />
                <Typography
                  level="p1"
                  text={
                    <>
                      Payment Terms: Invoices shall be settled by bank transfer
                      into Neointeraction Design Agency’s nominated bank account
                      within timeline agreed between Neointeraction Design
                      Agency and the client. Neointeraction Design retains
                      ownership of all work until full payment has been made.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Other Specialist Services: Neointeraction Design Agency’s
                      estimate is exclusive of third-party costs such as stock
                      images, plugins, fonts, photography, illustration, video
                      production, sound recording etc. unless otherwise included
                      in the estimate. Neointeraction Design Agency may, unless
                      you instruct us otherwise, seek such specialist services
                      on areas outside our expertise. The costs of such services
                      will be passed on to and will be quoted accordingly.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography level="h2" text={<>Scoping</>} />
                <Typography
                  level="p1"
                  text={
                    <>
                      In most cases, Neointeraction Design Agency will provide a
                      scoping document which details the functionality in the
                      work we do for our clients, this includes but is not
                      limited to a website, application or mobile app . Where
                      the client signs and approves this scoping document, any
                      changes beyond the scope will be handled as a new update
                      and priced accordingly.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography level="h2" text={<>Confidentiality</>} />
                <Typography
                  level="p1"
                  text={
                    <>
                      Confidentiality: Save as required by law, Neointeraction
                      Design Agency will keep your documents and affairs
                      confidential at all times, unless you permit disclosure or
                      the relevant circumstances are already in the public
                      domain. Neointeraction Design agency may, however,
                      disclose your documents and affairs to:
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Such of your other service providers as you inform
                      Neointeraction Design Agency are involved in any
                      assignment on which Neointeraction Design Agency is
                      instructed;
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Neointeraction Design Agency’s affiliated or related
                      parties; and
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Any other service provider to whom Neointeraction Design
                      Agency may properly delegate aspects of any assignment in
                      order to provide a full range of services to you.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography level="h2" text={<>Content</>} />
                <Typography
                  level="p1"
                  text={
                    <>
                      Content, Images and Graphs: It is your responsibility to
                      provide us with the required information about your
                      business and marketing objectives, necessary text and
                      graphic materials that make up the content of the work.
                      Neointeraction Design Agency takes no responsibility for
                      errors in content supplied by you. Any changes thus
                      incurred may be chargeable at standard rates. Failure to
                      supply material in an easily accessible format may result
                      in additional cost being incurred for retyping text.
                      Information for charts, graphs, and infographics to be
                      supplied in Excel. Neointeraction Design Agency will
                      assume that all images supplied to us are owned by the
                      Client or have been purchased from stock libraries and are
                      licensed to the client for use.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      You grant Neointeraction Design Agency permission to
                      utilize logos and any other company identity for the
                      purposes of creating the project. You agree to indemnify
                      Neointeraction Design Agency from any and all claims
                      arising from your negligence or inability to obtain proper
                      copyright permissions for all content supplied.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography level="h2" text={<>Intellectual Property</>} />
                <Typography
                  level="p1"
                  text={
                    <>
                      Intellectual Property: Freedom to use Ideas and IP:
                      Neointeraction Design Agency may develop or use for other
                      clients any ideas, concepts, source code, information or
                      know-how reflected in any of the materials provided to you
                      (in whatever form) or otherwise developed during the
                      course of providing services to you.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Ownership of Materials and Intellectual Property: All
                      products, design works, plans for designs, unique Ux
                      strategies, Ux copy, initial wireframe sketches, layouts,
                      development services, public and other marketing material
                      (whether on paper, computer disk, by email or in some
                      other digital format) accepted by Neointeraction Design
                      Agency, shall, upon you paying Neointeraction Design
                      Agency in full for the relevant materials, be your
                      property, except to the extent that any intellectual
                      property rights therein have been reserved by
                      Neointeraction Design Agency or third parties engaged or
                      employed by Neointeraction Design Agency.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Ownership of Materials and Intellectual Property: All
                      products, design works, plans for designs, unique Ux
                      strategies, Ux copy, initial wireframe sketches, layouts,
                      development services, public and other marketing material
                      (whether on paper, computer disk, by email or in some
                      other digital format) accepted by Neointeraction Design
                      Agency, shall, upon you paying Neointeraction Design
                      Agency in full for the relevant materials, be your
                      property, except to the extent that any intellectual
                      property rights therein have been reserved by
                      Neointeraction Design Agency or third parties engaged or
                      employed by Neointeraction Design Agency.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Portfolio Rights. Neointeraction Design Agency retains the
                      right to showcase your project on their website and design
                      portfolio for the sole purpose of promoting our work.
                    </>
                  }
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      Working Files and Copyright. Neointeraction Design Agency
                      owns the legal copyright of our working files. Working
                      files are our intellectual property and this can be and
                      not limited to design concepts, design elements,
                      infographics, fonts and imagery. Working files are not
                      released as part of our projects. If you wish to be
                      supplied working files, then this needs to be requested
                      and we will supply a quote for this release.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography level="h2" text={<>Liability</>} />
                <Typography
                  level="p1"
                  text={
                    <>
                      Our total liability to you in contract or in tort arising
                      in connection with this contract shall not exceed the
                      total price paid by you. We shall have no liability for
                      loss of profits, business, revenue, goodwill or
                      anticipated savings or for any other indirect or
                      consequential loss.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography level="h2" text={<>Indemnity</>} />
                <Typography
                  level="p1"
                  text={
                    <>
                      All services may be used for lawful purposes only. You
                      agree to indemnify and hold Neointeraction Design Agency
                      harmless from any claims resulting from your use of our
                      service that damages you or any other party.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography
                  level="h2"
                  text={<>Jurisdictional Laws and Arbitration</>}
                />
                <Typography
                  level="p1"
                  text={
                    <>
                      The Terms and Conditions declaration of the site/service,
                      their subject matter, and their formation (and any
                      non-contractual disputes or claims) are, governed by the
                      laws of India and subject to the exclusive jurisdiction of
                      the courts of Bangalore, India.
                    </>
                  }
                />
              </div>
              <div className="privacy-section mb-2">
                <Typography level="h2" text={<>Variation</>} />
                <Typography
                  level="p1"
                  text={
                    <>
                      Variation: These Terms and Conditions (and/or the contents
                      of any agreement to which they relate) may be varied or
                      superseded at any time by agreement in writing between us.
                      Any such variation shall not affect any rights or
                      obligations of either of us that may already have accrued,
                      unless otherwise specifically agreed.
                    </>
                  }
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
      <ExploreBanner />
    </div>
  );
};

export default Privacy;
