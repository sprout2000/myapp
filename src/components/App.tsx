import localforage from 'localforage';
import { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';

import {
  createStyles,
  makeStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { QR } from './QR';
import { SideBar } from './SideBar';
import { TitleBar } from './TitleBar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typeguardStorage = (arg: any): arg is Storage => {
  return (
    arg !== null &&
    typeof arg === 'object' &&
    typeof arg.year === 'number' &&
    typeof arg.month === 'number'
  );
};

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          margin: 0,
          padding: 0,
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none',
          WebkitTapHighlightColor: 'transparent !important',
          height: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    offset: theme.mixins.toolbar,
    root: {
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, sans-serif',
      height: '100%',
      backgroundColor: '#efeff4',
      position: 'relative',
      overflow: 'hidden',
    },
    icon: {
      margin: '0 auto',
      padding: 0,
    },
    content: {
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    card: {
      margin: '1em auto',
      width: '80vw',
      maxWidth: 400,
      color: '#666',
    },
    label: {
      fontWeight: 'bold',
      color: 'rgb(0, 122, 255)',
      letterSpacing: '0.25em',
      userSelect: 'none',
    },
    form: {
      minWidth: 250,
      padding: 10,
    },
    select: {
      minWidth: 200,
    },
    answer: {
      fontWeight: 'bold',
      color: 'rgb(255, 45, 85)',
      letterSpacing: '0.25em',
    },
    age: {
      fontSize: '6em',
      color: '#1f1f21',
    },
    eto: {
      userSelect: 'text',
    },
  })
);

export const App: React.FC = () => {
  const [year, setYear] = useState(1989);
  const [month, setMonth] = useState(4);
  const [qrOpen, setQrOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const classes = useStyles();

  const calc = (y: number, m: number): number => {
    const birthday = y * 10000 + m * 100 + 1;
    const today = new Date();
    const target =
      today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + 1;

    return Math.floor((target - birthday) / 10000);
  };

  const eto = (y: number): string => {
    const es = ['庚', '辛', '壬', '癸', '甲', '乙', '丙', '丁', '戊', '己'];
    const tos = [
      '申（さる）',
      '酉（とり）',
      '戌（いぬ）',
      '亥（いのしし）',
      '子（ねずみ）',
      '丑（うし）',
      '寅（とら）',
      '卯（うさぎ）',
      '辰（たつ）',
      '巳（へび）',
      '午（うま）',
      '未（ひつじ）',
    ];

    return `${es[y % 10]}${tos[y % 12]}`;
  };

  const Wareki = (start: number, end: number): JSX.Element[] => {
    const items = [];

    for (let i = start; i <= end; i++) {
      let gengo = '';
      let offset = 0;

      if (i < 1926) {
        gengo = '大正';
        offset = 1911;
      } else if (i < 1989) {
        gengo = '昭和';
        offset = 1925;
      } else if (i < 2019) {
        gengo = '平成';
        offset = 1988;
      } else {
        gengo = '令和';
        offset = 2018;
      }
      const wareki = i - offset;

      items.push(
        <MenuItem key={i} value={i}>
          <Typography>
            {gengo}
            {wareki === 1 ? '元' : wareki}年 ({i})
          </Typography>
        </MenuItem>
      );
    }

    return items;
  };

  const Tsuki = (): JSX.Element[] => {
    const items = [];

    for (let i = 1; i <= 12; i++) {
      items.push(
        <MenuItem key={i} value={i}>
          <Typography>{i}月</Typography>
        </MenuItem>
      );
    }

    return items;
  };

  const Years = Wareki(
    new Date().getFullYear() - 100,
    new Date().getFullYear()
  );
  const Months = Tsuki();

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const openQR = () => setQrOpen(true);
  const closeQR = () => setQrOpen(false);

  useEffect(() => {
    localforage
      .getItem('nenrei-20211001')
      .then((value) => {
        if (!value || !typeguardStorage(value)) {
          setYear(1989);
          setMonth(4);
        } else {
          setYear(value.year);
          setMonth(value.month);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    localforage
      .setItem('nenrei-20211001', { year, month })
      .catch((err) => console.error(err));
  }, [year, month]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root}>
          <CssBaseline />
          <QR qrOpen={qrOpen} onClose={closeQR} />
          <TitleBar toggleDrawer={toggleDrawer} />
          <SideBar
            drawerOpen={drawerOpen}
            onQROpen={openQR}
            toggleDrawer={toggleDrawer}
          />
          <div className={classes.content}>
            <div className={classes.offset} />
            <div className={classes.icon}>
              <img src="./icon-64.png" width={64} height={64} alt="年齢計算" />
            </div>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.label}>生まれ年と月</Typography>
                <div>
                  <FormControl variant="outlined" className={classes.form}>
                    <Select
                      className={classes.select}
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                    >
                      {Years}
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <FormControl variant="outlined" className={classes.form}>
                    <Select
                      className={classes.select}
                      value={month}
                      onChange={(e) => setMonth(Number(e.target.value))}
                    >
                      {Months}
                    </Select>
                  </FormControl>
                </div>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.answer}>年齢</Typography>
                <Typography>
                  満<span className={classes.age}>{calc(year, month)}</span>歳
                </Typography>
                <Typography>
                  <span className={classes.eto}>{eto(year)}</span>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
