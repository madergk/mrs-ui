/**
 * Preadmissions Page Component
 *
 * Navigation layout page for preadmissions section.
 * Based on Figma design: https://www.figma.com/design/ESNP5KunFotGObfcuXZ9Op/MRS---Material-UI-v.7.2.0?node-id=17866-49331
 */

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Breadcrumbs,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { AppBar, Toolbar } from '../../organisms/AppBar';
import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { Typography } from '../../atoms/Typography';
import { Avatar } from '../../atoms/Avatar';
import { Card, CardContent } from '../../molecules/Card';
import { Link } from '../../atoms/Link';

const DRAWER_WIDTH = 256;

interface TimelineItemProps {
  variant?: 'filled' | 'current' | 'outlined';
  title: string;
  description?: string;
  actionButton?: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  variant = 'filled',
  title,
  description,
  actionButton,
}) => {
  const theme = useTheme();

  const getDotContent = () => {
    if (variant === 'current') {
      return (
        <Box
          sx={{
            position: 'relative',
            width: 12,
            height: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: 24,
              height: 24,
              borderRadius: '50%',
              border: `2px solid ${theme.palette.primary.main}`,
              backgroundColor: 'transparent',
            }}
          />
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: theme.palette.primary.main,
            }}
          />
        </Box>
      );
    }
    if (variant === 'outlined') {
      return (
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            border: `2px solid ${theme.palette.divider}`,
            backgroundColor: 'transparent',
          }}
        />
      );
    }
    // filled
    return (
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: theme.palette.success.main,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon icon="check" size="small" sx={{ color: 'white', fontSize: '12px !important' }} />
        </Box>
    );
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: description || actionButton ? 0 : 0 }}>
        <Box sx={{ width: 12, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: '11.5px' }}>
          {getDotContent()}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: variant === 'current' ? 600 : 600,
              color: variant === 'current' ? 'text.primary' : 'text.secondary',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      {(description || actionButton) && (
        <Box sx={{ display: 'flex', mt: 0 }}>
          <Box sx={{ width: 12, display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: 2,
                backgroundColor: theme.palette.divider,
                minHeight: description && actionButton ? 86 : 35,
              }}
            />
          </Box>
          <Box sx={{ width: 16 }} />
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3, pb: 3 }}>
            {description && (
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {description}
              </Typography>
            )}
            {actionButton}
          </Box>
        </Box>
      )}
    </Box>
  );
};

interface PreadmissionCardProps {
  title: string;
  location: string;
  date: string;
  status: string;
  timelineItems: TimelineItemProps[];
}

const PreadmissionCard: React.FC<PreadmissionCardProps> = ({
  title,
  location,
  date,
  status,
  timelineItems,
}) => {
  const theme = useTheme();

  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 2,
        boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.1)',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Stack spacing={1}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '18px', color: '#272727' }}>
                {title}
              </Typography>
              <Stack spacing={1} direction="row" alignItems="center">
                <Icon icon="location_on" size="small" sx={{ fontSize: '16px', color: '#666' }} />
                <Typography variant="body2" sx={{ color: '#666', fontSize: '14px' }}>
                  {location}
                </Typography>
              </Stack>
              <Stack spacing={1} direction="row" alignItems="center">
                <Icon icon="event" size="small" sx={{ fontSize: '16px', color: '#666' }} />
                <Typography variant="body2" sx={{ color: '#666', fontSize: '14px' }}>
                  {date}
                </Typography>
              </Stack>
            </Stack>
            <Chip
              label={status}
              sx={{
                backgroundColor: '#e3ecf2',
                border: '0.686px solid #2481b8',
                color: '#2481b8',
                fontSize: '13px',
                height: '27px',
                fontWeight: 400,
                '& .MuiChip-label': {
                  px: 1.5,
                },
              }}
            />
          </Box>

          <Divider sx={{ borderColor: 'rgba(0,0,0,0.12)' }} />

          {/* Timeline */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

/**
 * Preadmissions page component
 *
 * @example
 * ```tsx
 * <Preadmissions />
 * ```
 */
export const Preadmissions: React.FC = () => {
  const theme = useTheme();

  const navigationItems = [
    {
      section: null,
      items: [
        { label: 'Inicio', icon: 'home', active: false },
        { label: 'Citas', icon: 'event', active: true },
      ],
    },
    {
      section: 'Mi salud',
      items: [
        { label: 'Órdenes', icon: 'description' },
        { label: 'Recetas', icon: 'medication' },
        { label: 'Resultados', icon: 'biotech' },
        { label: 'Cirugías', icon: 'local_hospital' },
        { label: 'Historial', icon: 'history' },
        { label: 'Salud preventiva', icon: 'favorite' },
      ],
    },
    {
      section: 'Precios y coberturas',
      items: [
        { label: 'Cotizador', icon: 'paid' },
        { label: 'Planes y seguros', icon: 'health_and_safety' },
      ],
    },
    {
      section: 'Cuenta',
      items: [{ label: 'Mis datos', icon: 'account_circle' }],
    },
  ];

  const preadmissionData: PreadmissionCardProps[] = [
    {
      title: 'Vasectomía bilateral ambulatorio',
      location: 'Clínica RedSalud Providencia',
      date: 'Fecha de operación: 3 de junio, 2024',
      status: 'En proceso',
      timelineItems: [
        {
          variant: 'filled',
          title: 'Antecedentes',
          description: 'Datos del paciente completados',
        },
        {
          variant: 'current',
          title: 'Documentos',
          description: 'Adjuntar documentación solicitada.',
          actionButton: (
            <Button variant="outlined" size="small" sx={{ alignSelf: 'flex-start' }}>
              Continuar
            </Button>
          ),
        },
        {
          variant: 'outlined',
          title: 'Firma de documentos',
        },
      ],
    },
    {
      title: 'Vasectomía bilateral ambulatorio',
      location: 'Clínica RedSalud Providencia',
      date: 'Fecha de operación: 3 de junio, 2024',
      status: 'En proceso',
      timelineItems: [
        {
          variant: 'filled',
          title: 'Antecedentes',
          description: 'Datos del paciente completados',
        },
        {
          variant: 'current',
          title: 'Documentos',
          description: 'Adjuntar documentación solicitada.',
        },
        {
          variant: 'outlined',
          title: 'Firma de documentos',
        },
      ],
    },
    {
      title: 'Vasectomía bilateral ambulatorio',
      location: 'Clínica RedSalud Providencia',
      date: 'Fecha de operación: 3 de junio, 2024',
      status: 'En proceso',
      timelineItems: [
        {
          variant: 'filled',
          title: 'Antecedentes',
          description: 'Datos del paciente completados',
        },
        {
          variant: 'current',
          title: 'Documentos',
          description: 'Adjuntar documentación solicitada.',
        },
        {
          variant: 'outlined',
          title: 'Firma de documentos',
        },
      ],
    },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Sidebar Navigation */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            boxShadow: theme.shadows[3],
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Box sx={{ height: 64, display: 'flex', alignItems: 'center', px: 2 }}>
          {/* Logo placeholder */}
        </Box>
        <Box sx={{ px: 2, pb: 2 }}>
          <Button variant="contained" startIcon={<Icon icon="add" size="small" />} fullWidth>
            Agendar
          </Button>
        </Box>
        <List sx={{ px: 1, py: 0 }}>
          {navigationItems.map((section, sectionIndex) => (
            <React.Fragment key={sectionIndex}>
              {section.section && (
                <ListItem sx={{ py: 0, px: 2 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      fontSize: '16px',
                      color: 'text.secondary',
                      lineHeight: '48px',
                    }}
                  >
                    {section.section}
                  </Typography>
                </ListItem>
              )}
              {section.items.map((item, itemIndex) => (
                <ListItem key={itemIndex} disablePadding>
                  <ListItemButton
                    sx={{
                      px: 2,
                      py: 1,
                      minHeight: 44,
                      backgroundColor: item.active ? theme.palette.primary._states?.hover : 'transparent',
                      '&:hover': {
                        backgroundColor: theme.palette.primary._states?.hover,
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 56 }}>
                      <Icon
                        icon={item.icon}
                        size="medium"
                        color="action"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: {
                          fontSize: '14px',
                          color: 'text.secondary',
                          fontWeight: item.active ? 600 : 400,
                        },
                      }}
                    />
                  </ListItemButton>
                  {section.section && itemIndex < section.items.length - 1 && (
                    <Divider sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
                  )}
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* AppBar */}
        <AppBar position="absolute" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar sx={{ px: 3 }}>
            <Box sx={{ flexGrow: 1 }}>
              {/* Logo placeholder */}
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
                Mi RedSalud
              </Typography>
            </Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <Stack alignItems="flex-end">
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Paula Sapúlveda
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Cuenta principal
                </Typography>
              </Stack>
              <Avatar size="medium" />
            </Stack>
          </Toolbar>
        </AppBar>

        {/* Main Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            pt: 9,
            px: 3,
            pb: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Breadcrumbs and Title */}
          <Box sx={{ px: 0, py: 2 }}>
            <Breadcrumbs separator="/" sx={{ mb: 2 }}>
              <Link href="#" color="text.primary">
                Mi salud
              </Link>
              <Link href="#" color="text.primary">
                Cirugías
              </Link>
              <Typography color="text.primary">Preadmisiones</Typography>
            </Breadcrumbs>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '34px' }}>
              Preadmisiones
            </Typography>
          </Box>

          {/* Cards */}
          <Box sx={{ px: 0, py: 1, flexGrow: 1 }}>
            <Stack spacing={2}>
              {preadmissionData.map((data, index) => (
                <PreadmissionCard key={index} {...data} />
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            backgroundColor: '#004d4d',
            height: 146,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: 5,
            py: 2,
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" justifyContent="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <Icon icon="menu_book" size="small" sx={{ color: 'white' }} />
              <Typography sx={{ color: 'white', fontSize: '18px' }}>Guía del portal</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Icon icon="medical_services" size="small" sx={{ color: 'white' }} />
              <Typography sx={{ color: 'white', fontSize: '18px' }}>Urgencias</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Icon icon="location_on" size="small" sx={{ color: 'white' }} />
              <Typography sx={{ color: 'white', fontSize: '18px' }}>Ubicación</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Icon icon="help" size="small" sx={{ color: 'white' }} />
              <Typography sx={{ color: 'white', fontSize: '18px' }}>Ayuda</Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              backgroundColor: '#009999',
              width: 253,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              px: 3,
              py: 4,
            }}
          >
            {/* Logo placeholder */}
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
              REDSALUD
            </Typography>
            <Stack direction="row" spacing={3}>
              <Icon icon="facebook" size="small" sx={{ color: 'white' }} />
              <Icon icon="share" size="small" sx={{ color: 'white' }} />
              <Icon icon="photo_camera" size="small" sx={{ color: 'white' }} />
              <Icon icon="play_arrow" size="small" sx={{ color: 'white' }} />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Preadmissions;

