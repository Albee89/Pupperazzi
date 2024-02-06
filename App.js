import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

const App = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ecf0f1' }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          birthday: '',
          breed: '',
          toy: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            <InputWithLabel
              label="Email"
              placeholder="What's your email?"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {errors.email && touched.email && <Text>{errors.email}</Text>}

            <InputWithLabel
              placeholder="What's your password?"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            {errors.password && touched.password && <Text>{errors.password}</Text>}

            <InputWithLabel
              placeholder="What's your pupperino's name?"
              value={values.name}
              onChangeText={handleChange('name')} />
              
              <InputWithLabel
              placeholder="What was the blessed date of their birth?"
              value={values.birthday}
              onChangeText={handleChange('birthday')} />
              
              <InputWithLabel
              placeholder="What's your furbaby's breed?"
              value={values.breed}
              onChangeText={handleChange('breed')} />
              
    
              <InputWithLabel
              placeholder="What's your bestie's fave toy?"
              value={values.toy}
              onChangeText={handleChange('toy')} />

            <Button onPress={handleSubmit} title="Submit" disabled={isSubmitting} />
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default App;

const InputWithLabel = (props) => {
  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>{props.label}</Text>
      <TextInput
        style={{ padding: 8, fontSize: 16 }}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={props.onSubmitEditing}
      />
      </ScrollView>


  );
};

