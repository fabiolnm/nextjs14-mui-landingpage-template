import {
  AutoFixHighRounded, ConstructionRounded, QueryStatsRounded,
  SettingsSuggestRounded, SupportAgentRounded, ThumbUpAltRounded,
} from '@mui/icons-material'
import {
  Box, Card, Container, Grid2, Stack, Typography,
} from '@mui/material'

const items = [
  {
    icon: <SettingsSuggestRounded />,
    title: 'Adaptable performance',
    description: `Our product effortlessly adjusts to your needs,
      boosting efficiency and simplifying your tasks.`,
  },
  {
    icon: <ConstructionRounded />,
    title: 'Built to last',
    description: `Experience unmatched durability
      that goes above and beyond with lasting investment.`,
  },
  {
    icon: <ThumbUpAltRounded />,
    title: 'Great user experience',
    description: `Integrate our product into your routine
      with an intuitive and easy-to-use interface.`,
  },
  {
    icon: <AutoFixHighRounded />,
    title: 'Innovative functionality',
    description: `Stay ahead with features that set new standards,
      addressing your evolving needs better than the rest.`,
  },
  {
    icon: <SupportAgentRounded />,
    title: 'Reliable support',
    description: `Count on our responsive customer support,
      offering assistance that goes beyond the purchase.`,
  },
  {
    icon: <QueryStatsRounded />,
    title: 'Precision in every detail',
    description: `Enjoy a meticulously crafted product where
      small touches make a significant impact on your overall experience.`,
  },
]

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation.
            Enjoy reliable customer support and precision in every detail.
          </Typography>
        </Box>
        <Grid2 container spacing={2}>
          {items.map((item) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '100%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  )
}