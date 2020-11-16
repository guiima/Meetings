import React, {useRef, useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';

import Button from '../../shared/components/Button';
import {
  Container,
  ContentForm,
  TextInput,
  Label,
  IconButton,
  Row,
  ContentButton,
  DateSelected,
} from './styles';

import {useCount} from '../../context/Count';

const items = [
  {
    id: '92iijs7yta',
    name: 'Ondo',
  },
  {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  },
  {
    id: '16hbajsabsd',
    name: 'Calabar',
  },
  {
    id: 'nahs75a5sg',
    name: 'Lagos',
  },
  {
    id: '667atsas',
    name: 'Maiduguri',
  },
  {
    id: 'hsyasajs',
    name: 'Anambra',
  },
  {
    id: 'djsjudksjd',
    name: 'Benue',
  },
  {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  },
  {
    id: 'suudydjsjd',
    name: 'Abuja',
  },
];

const windowWidth = Dimensions.get('window').width;

const FormSchema = Yup.object().shape({
  title: Yup.string().required('Insira um título'),
  description: Yup.string(),
  date: Yup.string().required('Insira a data de início'),
  startAt: Yup.string().required('Insira a hora do início'),
  endAt: Yup.string().required('Insira a hora do final'),
});

interface nativeEventProps {
  timestamp?: number;
}

interface Event {
  nativeEvent: nativeEventProps;
  type: string;
}

const MeetingForm: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [startAt, setStartAt] = useState(new Date());
  const [endAt, setEndAt] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showStartAt, setShowStartAt] = useState(false);
  const [showEndAt, setShowEndAt] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const image = useRef(null);
  const title = useRef(null);
  const description = useRef(null);
  // const date = useRef(null);
  // const startAt = useRef(null);
  // const endAt = useRef(null);

  const handleChange = () => {};

  const changeDate = (Event: Event) => {
    setShowDate((state) => !state);
    if (Event.nativeEvent.timestamp) {
      const dateSelected = new Date(Event.nativeEvent.timestamp);
      setDate(dateSelected);
    }
  };

  const changeStartAt = (Event: Event) => {
    console.log('satratat', Event);
    setShowStartAt((state) => !state);
    if (Event.nativeEvent.timestamp) {
      const timeSelected = new Date(Event.nativeEvent.timestamp);
      console.log('timeSelected', timeSelected);
      setStartAt(timeSelected);
    }
  };

  const changeEndAt = (Event: Event) => {
    console.log('satratat', Event);
    setShowEndAt((state) => !state);
    if (Event.nativeEvent.timestamp) {
      const timeSelected = new Date(Event.nativeEvent.timestamp);
      console.log('timeSelected', timeSelected);
      setEndAt(timeSelected);
    }
  };

  const onSelectedItemsChange = (selectedItems: any[]) => {
    setSelectedItems(selectedItems);
  };

  return (
    <Container>
      <Formik
        initialValues={{
          image: '',
          title: '',
          description: '',
          date: new Date(),
          startAt: '',
          endAt: '',
        }}
        onSubmit={(values) => {
          console.log('values', values);
        }}
        validationSchema={FormSchema}
      >
        {({values, handleChange, handleSubmit, errors}) => (
          <ContentForm>
            <Label>Title</Label>
            <TextInput
              ref={title}
              value={values.title}
              onChangeText={handleChange('title')}
            />
            {errors.title && <Text>{errors.title}</Text>}
            <Label>Description</Label>
            <TextInput
              ref={description}
              value={values.description}
              onChangeText={handleChange('description')}
            />
            {errors.description && <Text>{errors.description}</Text>}

            <Row>
              <Label>Date: </Label>
              <DateSelected>{date.toDateString()}</DateSelected>
              <IconButton onPress={() => setShowDate(true)}>
                <ContentButton>+</ContentButton>
              </IconButton>
            </Row>
            {showDate && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                // is24Hour={true}
                display="default"
                onChange={(data) => changeDate(data)}
              />
            )}
            {errors.startAt && <Text>{errors.startAt}</Text>}

            <Row>
              <Label>Início: </Label>
              <DateSelected>
                {startAt.toTimeString().split(' ')[0]}
              </DateSelected>
              <IconButton onPress={() => setShowStartAt(true)}>
                <ContentButton>+</ContentButton>
              </IconButton>
            </Row>

            {showStartAt && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={(data) => changeStartAt(data)}
              />
            )}
            {errors.startAt && <Text>{errors.startAt}</Text>}

            <Row>
              <Label>Final: </Label>
              <DateSelected>{endAt.toTimeString().split(' ')[0]}</DateSelected>
              <IconButton onPress={() => setShowEndAt(true)}>
                <ContentButton>+</ContentButton>
              </IconButton>
            </Row>
            {showEndAt && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={(data) => changeEndAt(data)}
              />
            )}
            {errors.endAt && <Text>{errors.endAt}</Text>}

            <Button
              type="primary"
              title="SAVE"
              size={windowWidth - 40}
              action={handleSubmit}
            />
          </ContentForm>
        )}
      </Formik>
    </Container>
  );
};

export default MeetingForm;
