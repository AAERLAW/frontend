import React from "react";

import { Boxed } from "../../components/Boxed.components";
import { Button } from "../../components/Button.components";
import { Text } from "../../components/Text.components";

import { Theme } from "../../utils/theme";
import { storageToken } from "../../utils/constant";

export const FAQ = (props) => {
  // dispatch props
  const { redirect } = props;

  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    const AuthToken = sessionStorage.getItem(storageToken);
    if (AuthToken) {
      redirect("/dashboard");
    } else {
      redirect("/");
    }
  };

  return (
    <Boxed
      style={{ minHeight: "100vh" }}
      display="flex"
      bColor={Theme.PrimaryDark}
      pad="20px"
    >
      <Boxed margin="auto" maxWidth="800px">
        <Boxed display="flex">
          <Boxed pad="0.25rem" width="180px">
            <Button
              block
              small
              pale
              color={Theme.PrimaryTextColor}
              onClick={() => goBack()}
            >
              Go Back
            </Button>
          </Boxed>

          <Boxed pad="0.25rem" margin="0 0 0 auto" width="180px">
            <Button block small onClick={() => goHome()}>
              Home
            </Button>
          </Boxed>
        </Boxed>
        <Boxed pad="1rem 0">
          <Text fontWeight="600" fontSize="18px">
            F.A.Q's
          </Text>
          <Text padding="17px 0 45px 0">
            {" "}
            By using the (.theofficial2baba.com) website and service you are
            agreeing to be bound by the following terms and conditions ("Terms
            of Use").
          </Text>
          <Text fontWeight="600" fontSize="18px">
            Basic Terms
          </Text>
          <ul>
            <li>You must be 16 years or older to use this site.</li>
            <li>
              You may not post nude, partially nude, or sexually suggestive
              photos.
            </li>
            <li>
              You are responsible for any activity that occurs under your screen
              name.
            </li>
            <li>You are responsible for keeping your password secure.</li>
            <li>
              You must not abuse, harass, threaten, impersonate or intimidate
              other users.
            </li>
            <li>
              You may not use service for any illegal or unauthorized purpose.
              International users agree to comply with all local laws regarding
              online conduct and acceptable content.
            </li>
            <li>
              You are solely responsible for your conduct and any data, text,
              information, screen names, graphics, photos, profiles, audio and
              video clips, links ("Content") that you “The Artist” submit, post,
              and display on the service
            </li>
            <li>
              You “The User” are solely responsible for your conduct and any
              data, text, information, screen names, profiles, and links
              ("Content") that you submit, post, and display on the service.
            </li>
            <li>
              You must not modify, adapt or hack this service or modify another
              website so as to falsely imply that it is associated with The
              Official 2Baba Service.
            </li>
            <li>
              You must not access The Official 2Baba’s private API by any other
              means other than the application or site itself.
            </li>
            <li>
              You must not crawl, scrape, or otherwise cache any content from
              The Official 2Baba Service including but not limited to user
              profiles and photos.
            </li>
            <li>
              You must not create or submit unwanted email or comments to any of
              The Official 2Baba App members ("Spam").
            </li>
            <li>
              You must not use web URLs in your name without prior written
              consent from The Official 2Baba App, inc.
            </li>
            <li>
              You must not transmit any worms or viruses or any code of a
              destructive nature.
            </li>
            <li>
              You must not, in the use of The Official 2Baba App, violate any
              laws in your jurisdiction (including but not limited to copyright
              laws).
            </li>
            <li>
              Violation of any of these agreements will result in the
              termination of your The Official 2Baba App account. While The
              Official 2Baba App prohibits such conduct and content on its site,
              you understand and agree that The Official 2Baba App cannot be
              responsible for the Content posted on its web site and you
              nonetheless may be exposed to such materials and that you use the
              The Official 2Baba App service at your own risk.
            </li>
          </ul>

          <Text fontWeight="600" fontSize="18px">
            General Conditions
          </Text>
          <ul>
            <li>
              We reserve the right to modify or terminate the The Official 2Baba
              App service for any reason, without notice at any time.
            </li>
            <li>
              We reserve the right to alter these Terms of Use at any time. If
              the alterations constitute a material change to the Terms of Use,
              we will notify you via internet mail according to the preference
              expressed on your account. What constitutes a "material change"
              will be determined at our sole discretion, in good faith and using
              common sense and reasonable judgement.
            </li>
            <li>
              We reserve the right to refuse service to anyone for any reason at
              any time.
            </li>
            <li>
              We reserve the right to force forfeiture of any username that
              becomes inactive, violates trademark, or may mislead other users.
            </li>
            <li>
              We have an obligation to, remove Content and accounts containing
              Content that we determine in our sole discretion are unlawful,
              offensive, threatening, libelous, defamatory, obscene or otherwise
              objectionable or violates any party's intellectual property or
              these Terms of Use.
            </li>
            <li>
              We reserve the right to reclaim usernames on behalf of businesses
              or individuals that hold legal claim or trademark on those
              usernames.
            </li>
          </ul>

          <Text fontWeight="600" fontSize="18px">
            Proprietary Rights in Content on The Official 2Baba App
          </Text>
          <ul>
            <li>
              {" "}
              The Official 2Baba App does NOT claim ANY ownership rights in the
              text, files, images, photos, video, sounds, musical works, works
              of authorship, applications, or any other materials (collectively,
              "Content") that you post on or through the The Official 2Baba App
              Services. By displaying or publishing ("posting") any Content on
              or through the The Official 2Baba App Services, you hereby grant
              to The Official 2Baba App a non-exclusive, fully paid and
              royalty-free, worldwide, limited license to use, modify, delete
              from, add to, publicly perform, publicly display, reproduce and
              translate such Content, including without limitation distributing
              part or all of the Site in any media formats through any media
              channels, except Content not shared publicly ("private") will not
              be distributed outside the The Official 2Baba App Services.{" "}
            </li>
            <li>
              {" "}
              Some of the The Official 2Baba App Services are supported by
              advertising revenue and may display advertisements and promotions,
              and you hereby agree that The Official 2Baba App may place such
              advertising and promotions on the The Official 2Baba App Services
              or on, about, or in conjunction with your Content. The manner,
              mode and extent of such advertising and promotions are subject to
              change without specific notice to you.
            </li>
            <li>
              {" "}
              You represent and warrant that: (i) you own the Content posted by
              you on or through the The Official 2Baba App Services or otherwise
              have the right to grant the license set forth in this section,
              (ii) the posting and use of your Content on or through the The
              Official 2Baba App Services does not violate the privacy rights,
              publicity rights, copyrights, contract rights, intellectual
              property rights or any other rights of any person, and (iii) the
              posting of your Content on the Site does not result in a breach of
              contract between you and a third party. You agree to pay for all
              royalties, fees, and any other monies owing any person by reason
              of Content you post on or through The Official 2Baba App Services.
            </li>
            <li>
              {" "}
              The Official 2Baba App Services contain Content of The Official
              2Baba App ("The Official 2Baba App Content"). The Official 2Baba
              App Content is protected by copyright, trademark, patent, trade
              secret and other laws, and The Official 2Baba App owns and retains
              all rights in The Official 2Baba App Content and The Official
              2Baba App Services. The Official 2Baba App hereby grants you a
              limited, revocable, nonsublicensable license to reproduce and
              display the The Official 2Baba App Content (excluding any software
              code) solely for your personal use in connection with viewing the
              Site and using the The Official 2Baba App Services.
            </li>
            <li>
              {" "}
              The Official 2Baba App Services contain Content of Users and other
              The Official 2Baba App licensors. Except as provided within this
              Agreement, you may not copy, modify, translate, publish,
              broadcast, transmit, distribute, perform, display, or sell any
              Content appearing on or through The Official 2Baba App Services.{" "}
            </li>
            <li>
              The Official 2Baba App performs technical functions necessary to
              offer The Official 2Baba App Services, including but not limited
              to transcoding and/or reformatting Content to allow its use
              throughout The Official 2Baba App Services.
            </li>
            <li>
              Although the Site and other The Official 2Baba App Services are
              normally available, there will be occasions when the Site or other
              The Official 2Baba App Services will be interrupted for scheduled
              maintenance or upgrades, for emergency repairs, or due to failure
              of telecommunications links and equipment that are beyond the
              control of The Official 2Baba App. Also, although The Official
              2Baba App will normally only delete Content that violates this
              Agreement, The Official 2Baba App reserves the right to delete any
              Content for any reason, without prior notice. Deleted content may
              be stored by The Official 2Baba App in order to comply with
              certain legal obligations and is not retrievable without a valid
              court order. Consequently, The Official 2Baba App encourages you
              to maintain your own backup of your Content. In other words, The
              Official 2Baba App is not a backup service. The Official 2Baba App
              will not be liable to you for any modification, suspension, or
              discontinuation of the The Official 2Baba App Services, or the
              loss of any Content.
            </li>
          </ul>
        </Boxed>
      </Boxed>
    </Boxed>
  );
};
