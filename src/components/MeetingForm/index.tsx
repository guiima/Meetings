import React, {useRef, useState} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectMultiple from 'react-native-select-multiple';

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
  Body,
  Footer,
  HideShowButton,
  SelectMultipleStyled,
  ContentMultiSelect,
} from './styles';

import {useCount} from '../../context/Count';

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

// const fruits = ['Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears'];

const MeetingForm: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [startAt, setStartAt] = useState(new Date());
  const [endAt, setEndAt] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showStartAt, setShowStartAt] = useState(false);
  const [showEndAt, setShowEndAt] = useState(false);
  const [showcollaborators, setShowcollaborators] = useState(false);
  const [itemSelected, setItemSelected] = useState<string[]>([]);
  const [fruits, setFruits] = useState<string[]>([
    'Apples',
    'Oranges',
    'Pears',
    'Apple1s',
    'Orange1s',
    'Pear1s',
  ]);

  const image = useRef(null);
  const title = useRef(null);
  const description = useRef(null);

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

  const onSelectionsChange = (selectedFruits: string[]) => {
    // selectedFruits is array of { label, value }
    console.log('selectedFruits', selectedFruits);
    setItemSelected(selectedFruits);
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
            <Body>
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
                <DateSelected>
                  {endAt.toTimeString().split(' ')[0]}
                </DateSelected>
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
              <ContentMultiSelect>
                <SelectMultipleStyled
                  items={fruits}
                  selectedItems={itemSelected}
                  onSelectionsChange={onSelectionsChange}
                />
              </ContentMultiSelect>
            </Body>

            <Footer>
              <Button
                type="primary"
                title="SAVE"
                size={windowWidth - 40}
                action={handleSubmit}
              />
            </Footer>
          </ContentForm>
        )}
      </Formik>
    </Container>
  );
};

export default MeetingForm;
