import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/system';
import Navbar from '../Navbar';

const questions = [
  {
    id: 1,
    question: "Comment prendre rendez-vous sur le site ?",
    answer: "Pour prendre rendez-vous sur notre site, vous devez d'abord trouver le professionnel de santé que vous souhaitez consulter en utilisant notre moteur de recherche. Une fois que vous avez trouvé le praticien souhaité, vous pouvez sélectionner une date et un créneau horaire disponibles pour prendre rendez-vous.",
  },
  {
    id: 2,
    question: "Comment annuler un rendez-vous pris sur le site ?",
    answer: "Pour annuler un rendez-vous que vous avez pris sur notre site, connectez-vous à votre compte, accédez à vos rendez-vous à venir et sélectionnez le rendez-vous que vous souhaitez annuler. Vous pouvez ensuite cliquer sur le bouton Annuler et suivre les étapes pour confirmer l'annulation.",
  },
  {
    id: 3,
    question: "Comment modifier un rendez-vous pris sur le site ?",
    answer: "Pour modifier un rendez-vous que vous avez pris sur notre site, connectez-vous à votre compte, accédez à vos rendez-vous à venir et sélectionnez le rendez-vous que vous souhaitez modifier. Vous pouvez ensuite cliquer sur le bouton Modifier et suivre les étapes pour sélectionner une nouvelle date et heure de rendez-vous.",
  },
  {
    id: 4,
    question: "Comment savoir si mon rendez-vous est confirmé ?",
    answer: "Vous recevrez une confirmation par e-mail ou par SMS dès que votre rendez-vous aura été confirmé par le professionnel de santé. Si vous n'avez pas reçu de confirmation dans les 24 heures suivant la prise de rendez-vous, veuillez contacter le praticien directement pour confirmer.",
  },
  {
    id: 5,
    question: "Quels sont les frais associés à la prise de rendez-vous sur votre site ?",
    answer: "Notre service de prise de rendez-vous en ligne est gratuit pour les patients. Les frais associés à votre consultation seront déterminés par le professionnel de santé que vous consultez.",
  },
  {
    id: 6,
    question: "Comment trouver un professionnel de santé qui parle ma langue ?",
    answer: "Vous pouvez utiliser notre moteur de recherche pour trouver des professionnels de santé qui parlent votre langue. Il vous suffit de sélectionner votre langue dans les filtres de recherche pour voir une liste de praticiens correspondants.",
  },
  {
    id: 7,
    question: "Comment puis-je payer en ligne pour ma consultation ?",
    answer: "Les paiements en ligne sont gérés directement par le praticien que vous consultez. Vous recevrez des instructions sur la manière de payer en ligne une fois que votre rendez-vous aura été confirmé.",
  },
];

export default function Faq() {
  return (
    <Box>
    <Navbar />

    <Box sx={{ maxWidth: "800px", margin: "auto" }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginY: 6, color: "white", fontFamily: ["Plus Jakarta Sans"], }}>Foire Aux Questions</Typography>
      {questions.map((q) => (
        <Accordion key={q.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ backgroundColor: "rgba(0, 0, 0, .03)", borderRadius: "5px" }}
          >
            <Typography variant="h6" sx={{ fontFamily: ["Plus Jakarta Sans"], }}>{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "rgba(0, 0, 0, .05)", borderRadius: "5px" }}>
            <Typography variant="p" sx={{ fontFamily: ["Plus Jakarta Sans"] }}>{q.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
    </Box>
  );
}
