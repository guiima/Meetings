import React, {useRef} from 'react';
import {View, Text, Button} from 'react-native';
import * as Yup from 'yup';

import {Formik} from 'formik';

import {Container} from './styles';
import {TextInput} from 'react-native-gesture-handler';

const FormSchema = Yup.object().shape({
  user: Yup.string().required('Campo obrigatorio user'),
  password: Yup.string().required('pass obrigatorio'),
});

const MeetingForm: React.FC = () => {
  const user = useRef(null);
  const password = useRef(null);

  return (
    <Container>
      <Formik
        initialValues={{
          user: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log('values', values);
        }}
        validationSchema={FormSchema}
      >
        {({values, handleChange, handleSubmit, errors}) => (
          <>
            <Text>Usuario</Text>
            <TextInput
              ref={user}
              value={values.user}
              onChangeText={handleChange('users')}
            />
            {errors.user && <Text>{errors.user}</Text>}
            <Text>senha</Text>
            <TextInput
              ref={password}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            {errors.password && <Text>{errors.password}</Text>}

            <Button title="save" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Container>
  );
};

export default MeetingForm;
