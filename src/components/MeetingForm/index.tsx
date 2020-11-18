import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from '../../shared/components/Button';
import {Meetings} from '../../types/meetings';
import {getCollaborators} from '../../services/collaborators';

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
  SelectMultipleStyled,
  Error,
  ContetMultiSelect,
} from './styles';

import {useCount} from '../../context/Count';

const windowWidth = Dimensions.get('window').width;

const FormSchema = Yup.object().shape({
  title: Yup.string().required('Insira um título'),
  description: Yup.string(),
});

interface ErrosProps {
  collaborators: null | string;
}

interface FormProps {
  title: string;
  description: string;
}

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
  const [collaborators, setCollaborators] = useState<string[]>([]);
  const [listCollaborators, setListCollaborators] = useState<string[]>([]);
  const [errosWitoutFormik, setErrosWitoutFormik] = useState<ErrosProps>({
    collaborators: null,
  });

  const image = useRef(null);
  const title = useRef(null);
  const description = useRef(null);

  const changeDate = (Event: Event) => {
    setShowDate((state) => !state);
    if (Event.nativeEvent.timestamp) {
      const dateSelected = new Date(Event.nativeEvent.timestamp);
      setDate(dateSelected);
    }
  };

  const changeStartAt = (Event: Event) => {
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

  const onSelectionsChange = (selectedCollaborators: string[]) => {
    setCollaborators(selectedCollaborators);
  };

  const validateCollaborators = () => {
    if (collaborators.length <= 0) {
      setErrosWitoutFormik({
        ...errosWitoutFormik,
        collaborators: 'Selecione ao menos um colaborador.',
      });
      return false;
    } else {
      setErrosWitoutFormik({
        ...errosWitoutFormik,
        collaborators: null,
      });
      return true;
    }
  };

  const handleSubmit = (values: FormProps) => {
    // const dataNascimentoPrecisa = moment("1994-05-25 13:00");
    // console.log('dataNascimentoPrecisa', dataNascimentoPrecisa);

    const valid = validateCollaborators();
    if (valid) {
      const submitItens = {...values, collaborators, date, startAt, endAt};
      console.log('submitItens', submitItens);
    }
    console.log('values2', values);
  };

  const getAllCollaborators = () => {
    getCollaborators()
      .then((response) => {
        setListCollaborators(response);
      })
      .catch((err) => {
        console.warn('err', err);
      });
  };

  useEffect(() => {
    getAllCollaborators();
  }, []);

  return (
    <Container>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        onSubmit={(values) => {
          console.log('values', values);
          handleSubmit(values);
        }}
        validationSchema={FormSchema}
      >
        {({values, handleChange, handleSubmit, errors}) => (
          <ContentForm>
            <Body>
              <Label>Título</Label>
              <TextInput
                ref={title}
                value={values.title}
                onChangeText={handleChange('title')}
              />
              {errors.title && <Error>{errors.title}</Error>}
              <Label>Descrição</Label>
              <TextInput
                ref={description}
                value={values.description}
                onChangeText={handleChange('description')}
              />
              {errors.description && <Error>{errors.description}</Error>}
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
                  is24Hour={true}
                  display="default"
                  onChange={(data) => changeDate(data)}
                />
              )}
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
              <ContetMultiSelect>
                <SelectMultipleStyled
                  items={listCollaborators}
                  selectedItems={collaborators}
                  onSelectionsChange={onSelectionsChange}
                />
              </ContetMultiSelect>
              {errosWitoutFormik.collaborators && (
                <Error>{errosWitoutFormik.collaborators}</Error>
              )}
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
