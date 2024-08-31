import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EventCreatedEmailProps {
  userFirstname: string | null;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const EventCreatedEmail = ({
  userFirstname,
}: EventCreatedEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Event Anda kini tersedia untuk diakses oleh seluruh komunitas Annect.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://utfs.io/f/95f2b4b1-7ad5-42e9-88ff-aefdb873a2eb-1zbfv.svg`}
          width="170"
          height="50"
          alt="Annect"
          style={logo}
        />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Selamat! Event Anda telah berhasil diunggah ke Annect. Kami sangat
          senang membantu Anda menyebarkan informasi mengenai event yang telah
          Anda buat kepada komunitas kami.
        </Text>
        <Text style={paragraph}>
          Ingin mengelola event Anda? Klik tombol di bawah ini untuk melihat,
          mengedit, atau mempromosikan event Anda lebih lanjut.
        </Text>
        <Section style={btnContainer}>
          <Button
            style={button}
            href="https://annect.vercel.app/users/channels"
          >
            Kelola Event
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Annect team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Universitas Pembangunan Negeri Veteran Jawa Timur, Indonesia
        </Text>
      </Container>
    </Body>
  </Html>
);

EventCreatedEmail.PreviewProps = {
  userFirstname: "Alan",
} as EventCreatedEmailProps;

export default EventCreatedEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
