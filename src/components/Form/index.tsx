import { useCallback, useEffect, useState } from 'react';
import style from './Form.module.scss';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('val1');
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = {
      country,
      street,
      subject,
    };
    tg.sendData(JSON.stringify(data));
  }, [country, street, subject, tg]);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);

    return () => {
      tg.offEvent('mainButtonClicked', onSendData);
    };
  }, [tg, onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные',
    });
  }, [tg.MainButton]);

  useEffect(() => {
    if (!country || !street) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, street, tg.MainButton]);

  const onChangeCountry = (e: any) => {
    setCountry(e.target.value);
  };
  const onChangeStreet = (e: any) => {
    setStreet(e.target.value);
  };
  const onChangeSubject = (e: any) => {
    setSubject(e.target.value);
  };

  return (
    <div>
      <h3>Форма</h3>
      <input
        value={country}
        onChange={onChangeCountry}
        type='text'
        placeholder='placeholder'
        className={style.input}
      />
      <input
        value={street}
        onChange={onChangeStreet}
        type='text'
        placeholder='placeholder'
        className={style.input}
      />
      <select value={subject} onChange={onChangeSubject}>
        <option value='val1'>val1</option>
        <option value='val2'>val2</option>
        <option value='val3'>val3</option>
      </select>
    </div>
  );
};

export default Form;
