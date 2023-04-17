import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import Footer from "../HomePage/Footer";
import Navbar from "../Navbar";

export default function CGU() {
  return (
    <Box>
    <Navbar />
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ mb: 3, color: "white", fontFamily: ["Plus Jakarta Sans"], fontWeight: 800 }}>
        Conditions générales d'utilisation
      </Typography>
      <Divider sx={{ mb: 3, backgroundColor: "white" }} />
      <Typography variant="p" sx={{ mb: 3, color: "white", fontFamily: ["Plus Jakarta Sans"] }}>
        Les présentes conditions générales d'utilisation (les "CGU") ont pour
        objet de définir les modalités d'utilisation de l'application de prise
        de rendez-vous en ligne ("MyHealth") fournie par [KITT] (la "Société"). En accédant à l'Application, vous acceptez
        d'être lié par les présentes CGU. Si vous n'acceptez pas ces CGU, vous
        ne devez pas utiliser l'Application.
      </Typography>
      <Typography variant="h6" sx={{ my: 2, color: "white", fontFamily: ["Plus Jakarta Sans"], fontWeight: 800    }}>
        1. Objet de l'Application
      </Typography>
      <Typography variant="p" sx={{ mb: 3, color: "white", fontFamily: ["Plus Jakarta Sans"] }}>
        L'Application est un outil permettant aux utilisateurs de trouver et de
        prendre rendez-vous avec des professionnels de santé.
      </Typography>
      <Typography variant="h6" sx={{ my: 2, color: "white", fontFamily: ["Plus Jakarta Sans"], fontWeight: 800  }}>
        2. Conditions d'utilisation
      </Typography>
      <Typography  sx={{ marginY: 3, color: "white", fontFamily: ["Plus Jakarta Sans"] }}>
        a. Utilisation de l'Application
        <br />
        <br />
        En utilisant l'Application, vous acceptez de ne pas :
        <ul>
          <li>
            violer les droits de propriété intellectuelle de la Société ou de
            tiers ;
          </li>
          <li>
            perturber ou endommager l'Application ou les serveurs hébergeant
            l'Application ;
          </li>
          <li>
            utiliser l'Application à des fins illégales ou non autorisées ;
          </li>
          <li>harceler, intimider ou menacer d'autres utilisateurs ;</li>
          <li>
            collecter ou stocker des données personnelles d'autres utilisateurs
            sans leur consentement ;
          </li>
          <li>
            utiliser l'Application pour envoyer du spam ou des courriels non
            sollicités.
          </li>
        <br />
        </ul>
        b. Données personnelles
        <br />
        <br />
        En utilisant l'Application, vous acceptez que la Société collecte et
        utilise vos données personnelles conformément à sa politique de
        confidentialité.
        <br />
        <br />
        c. Sécurité
        <br />
        <br />
        La Société prend des mesures raisonnables pour protéger l'Application
        contre les attaques de sécurité et les virus informatiques. Cependant,
        la Société ne peut garantir que l'Application sera toujours exempte de
        virus ou d'autres éléments nuisibles.
        <br />
        <br />
        d. Modification des CGU
        <br />
        <br />
        La Société se réserve le droit de modifier les CGU à tout moment. Les
        modifications entreront en vigueur dès leur publication sur
        l'Application.
      </Typography>
      <Typography variant="h6" sx={{ mb: 2, color: "white", fontFamily: ["Plus Jakarta Sans"], fontWeight: 800  }}>
        3. Propriété intellectuelle
      </Typography>
      <Typography variant="p" sx={{ mb: 3, color: "white", fontFamily: ["Plus Jakarta Sans"] }}>
        L'Application et son contenu, y compris mais sans s'y limiter, les
        textes,graphiques, images, logos, marques de commerce et autres
        éléments, sont la propriété exclusive de la Société ou de ses concédants
        de licence et sont protégés par les lois sur la propriété intellectuelle
        applicables. Vous acceptez de ne pas copier, modifier, distribuer,
        vendre ou louer tout élément de l'Application sans l'autorisation écrite
        préalable de la Société.
      </Typography>
      <Typography variant="h6" sx={{ my: 2, color: "white", fontFamily: ["Plus Jakarta Sans"], fontWeight: 800  }}>
        4. Responsabilité
      </Typography>
      <Typography sx={{ mb: 3, color: "white", fontFamily: ["Plus Jakarta Sans"] }}>
        a. Limitation de responsabilité
        <br />
        <br />
        La Société ne sera pas responsable des dommages directs, indirects,
        accessoires, spéciaux, punitifs ou consécutifs découlant de
        l'utilisation ou de l'incapacité à utiliser l'Application, même si la
        Société a été informée de la possibilité de tels dommages.
        <br />
        <br />
        b. Indemnisation
        <br />
        <br />
        Vous acceptez d'indemniser et de dégager la Société de toute
        responsabilité, réclamation ou demande, y compris les honoraires
        d'avocat raisonnables, présentés par un tiers en raison de votre
        violation des présentes CGU ou de votre utilisation de l'Application.
      </Typography>
      <Typography variant="h6" sx={{ mb: 2, color: "white", fontFamily: ["Plus Jakarta Sans"], fontWeight: 800  }}>
        5. Dispositions générales
      </Typography>
      <Typography sx={{ mb: 3, color: "white", fontFamily: ["Plus Jakarta Sans"] }}>
        a. Loi applicable
        <br />
        <br />
        Les présentes CGU sont régies et interprétées conformément aux lois du
        [pays] et seront soumises à la compétence exclusive des tribunaux de
        [ville/État/Pays].
        <br />
        <br />
        b. Divisibilité
        <br />
        <br />
        Si une disposition des présentes CGU est jugée invalide ou inapplicable,
        les autres dispositions resteront en vigueur.
        <br />
        <br />
        c. Renonciation
        <br />
        <br />
        Le fait pour la Société de ne pas exercer ou de ne pas faire valoir un
        droit ou une disposition des présentes CGU ne constitue pas une
        renonciation à ce droit ou à cette disposition.
        <br />
        <br />
        d. Accord complet
        <br />
        <br />
        Les présentes CGU constituent l'intégralité de l'accord entre vous et la
        Société et remplacent toutes les communications et propositions
        antérieures ou contemporaines, qu'elles soient électroniques, orales ou
        écrites, entre vous et la Société concernant l'Application.
        <br />
        Si vous avez des questions concernant ces CGU, veuillez contacter la
        Société à l'adresse suivante : alexis.morin@ovh.fr
        <br />
        En utilisant l'Application, vous acceptez les présentes CGU.
      </Typography>
    </Container>
    <Footer/>
    </Box>
  );
}
