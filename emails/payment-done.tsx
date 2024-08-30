import React from "react";

const PaymentDone = () => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Simple Transactional Email</title>
        <style media="all" type="text/css">
          {`
            body {
              font-family: Helvetica, sans-serif;
              -webkit-font-smoothing: antialiased;
              font-size: 16px;
              line-height: 1.3;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%;
              background-color: #f4f5f6;
              margin: 0;
              padding: 0;
            }

            table {
              border-collapse: separate;
              width: 100%;
            }

            table td {
              font-family: Helvetica, sans-serif;
              font-size: 16px;
              vertical-align: top;
            }

            .container {
              margin: 0 auto !important;
              max-width: 600px;
              padding: 0;
              padding-top: 24px;
              width: 600px;
            }

            .main {
              background: #ffffff;
              border: 1px solid #eaebed;
              border-radius: 16px;
              width: 100%;
            }

            .wrapper {
              padding: 24px;
            }

            .footer {
              padding-top: 24px;
              text-align: center;
              width: 100%;
            }

            .footer td,
            .footer p,
            .footer span,
            .footer a {
              color: #9a9ea6;
              font-size: 16px;
              text-align: center;
            }

            p {
              font-family: Helvetica, sans-serif;
              font-size: 16px;
              font-weight: normal;
              margin: 0;
              margin-bottom: 16px;
            }

            a {
              color: #0867ec;
              text-decoration: underline;
            }

            .btn {
              min-width: 100% !important;
              width: 100%;
            }

            .btn>tbody>tr>td {
              padding-bottom: 16px;
            }

            .btn table {
              width: auto;
            }

            .btn table td {
              background-color: #ffffff;
              border-radius: 4px;
              text-align: center;
            }

            .btn a {
              background-color: #ffffff;
              border: solid 2px #0867ec;
              border-radius: 4px;
              color: #0867ec;
              cursor: pointer;
              display: inline-block;
              font-size: 16px;
              font-weight: bold;
              padding: 12px 24px;
              text-decoration: none;
              text-transform: capitalize;
            }

            .btn-primary table td {
              background-color: #0867ec;
            }

            .btn-primary a {
              background-color: #0867ec;
              border-color: #0867ec;
              color: #ffffff;
            }

            @media only screen and (max-width: 640px) {
              .container {
                padding-top: 8px !important;
                width: 100% !important;
              }

              .main {
                border-radius: 0 !important;
              }

              .btn a {
                font-size: 16px !important;
                max-width: 100% !important;
                width: 100% !important;
              }
            }
          `}
        </style>
      </head>
      <body>
        <table
          role="presentation"
          border="0"
          cellpadding="0"
          cellspacing="0"
          className="body"
        >
          <tr>
            <td>&nbsp;</td>
            <td className="container">
              <div className="content">
                <span
                  className="preheader"
                  style={{
                    color: "transparent",
                    display: "none",
                    height: 0,
                    maxHeight: 0,
                    maxWidth: 0,
                    opacity: 0,
                    overflow: "hidden",
                    visibility: "hidden",
                    width: 0,
                  }}
                >
                  This is preheader text. Some clients will show this text as a
                  preview.
                </span>
                <table
                  role="presentation"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  className="main"
                >
                  <tr>
                    <td className="wrapper">
                      <p>Halo,</p>
                      <p>
                        Pembayaran untuk event yang Anda daftar telah kami
                        terima. Klik tombol di bawah untuk bergabung ke grup
                        event.
                      </p>
                      <table
                        role="presentation"
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        className="btn btn-primary"
                      >
                        <tbody>
                          <tr>
                            <td align="left">
                              <table
                                role="presentation"
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <a href="#" target="_blank">
                                        Join
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p>Terima kasih telah mempercayai ANNECT!</p>
                    </td>
                  </tr>
                </table>
                <div className="footer">
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                  >
                    <tr>
                      <td className="content-block">
                        <span className="apple-link">
                          PT. Karya Anak Bangsat
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="content-block powered-by">
                        <a href="http://htmlemail.io">Made by Human</a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>
  );
};

export default PaymentDone;
