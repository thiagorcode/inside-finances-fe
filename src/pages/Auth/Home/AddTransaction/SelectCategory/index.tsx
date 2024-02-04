import { useCallback, useEffect, useState } from 'react';
import { TransactionCategory } from '@/interface/transactionCategory.interface';
import {
  TitleCategory,
  ContentOptions,
  FieldCategory,
  CategoryBadge,
  CategoryContainer,
} from './styles';
import { FlightTakeoff } from '@mui/icons-material';
import { FormTransaction } from '../styles';

export const SelectCategory = () => {
  const [category, setCategory] = useState<TransactionCategory[]>([]);
  const [categoryInit, setCategoryInit] = useState('');
  const [categoryFiltered, setCategoryFiltered] = useState<
    TransactionCategory[]
  >([]);

  const datas = [
    {
      id: '05094f4b-f0eb-460d-bd79-d36fb63f86f5',
      name: 'Contas',
      icon: 'Receipt',
      type: '-',
    },
    {
      id: '0e13f258-ea8f-422c-aefd-185b1c9a73fc',
      icon: '""',
      name: 'Transferência',
      type: '+',
    },
    {
      id: '1582f89e-77ed-4b1f-8e4e-82471e9a6e0b',
      icon: 'Receipt',
      name: 'Educação',
      type: '-',
    },
    {
      id: '4329373a-f409-453f-98d2-815262ecc6e7',
      icon: 'Receipt',
      name: 'Dividendos',
      type: '+',
    },
    {
      id: '0d29d8da-8db8-4c78-bb61-60cdea046465',
      icon: '',
      name: 'Pet',
      type: '-',
    },
    {
      id: '4757f2e1-4464-49bf-b873-9f1e4870c856',
      icon: 'Receipt',
      name: 'Alimentação',
      type: '-',
    },
    {
      id: '487515eb-101d-4d6d-96d2-eff8eb8a27f7',
      icon: '""',
      name: 'Música',
      type: '-',
    },
    {
      id: '08da2204-05c5-4124-a95f-7d944b5c7435',
      icon: 'Checkroom',
      name: 'Vestuário',
      type: '-',
    },
  ];
  const filterData = datas.filter(date => date.type === categoryInit);

  const loadCategory = useCallback(async () => {
    // try {
    //   const response = await transactionCategoryService.listCategory();
    //   if (response.status !== 200) {
    //     message.error('Erro ao carregar as categorias!');
    //     return;
    //   }
    //   setCategory(response.data.category);
    // } catch (error) {
    //   message.error('Erro ao carregar as categorias!');
    // }
  }, []);

  useEffect(() => {
    loadCategory();
  }, []);

  const filterCategory = useCallback(() => {
    const categoryByType = category.filter(_category => _category.type);
    setCategoryFiltered(categoryByType);
  }, [category]);

  useEffect(() => {
    filterCategory();
  }, []);

  return (
    <FormTransaction>
      <>
        <div>
          <TitleCategory>Categorias:</TitleCategory>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {filterData.map(date => (
            <ContentOptions key={date.id}>
              <div
                style={{
                  alignItems: 'center',
                  marginTop: '5px',
                }}
              >
                <label>{date.name}</label>
              </div>
            </ContentOptions>
          ))}
        </div>
        <div>
          <FieldCategory>
            <CategoryContainer>
              <CategoryBadge>
                <FlightTakeoff
                  style={{ fontSize: 40 }}
                  sx={{ color: '#fff' }}
                />
                Viagem
              </CategoryBadge>
              <CategoryBadge>
                <FlightTakeoff
                  style={{ fontSize: 40 }}
                  sx={{ color: '#fff' }}
                />
                Viagem
              </CategoryBadge>
              <CategoryBadge>
                <FlightTakeoff
                  style={{ fontSize: 40 }}
                  sx={{ color: '#fff' }}
                />
                Viagem
              </CategoryBadge>
              <CategoryBadge>
                <FlightTakeoff
                  style={{ fontSize: 40 }}
                  sx={{ color: '#fff' }}
                />
                Viagem
              </CategoryBadge>
              <CategoryBadge>
                <FlightTakeoff
                  style={{ fontSize: 40 }}
                  sx={{ color: '#fff' }}
                />
                Viagem
              </CategoryBadge>
              <CategoryBadge>
                <FlightTakeoff
                  style={{ fontSize: 40 }}
                  sx={{ color: '#fff' }}
                />
                Viagem
              </CategoryBadge>{' '}
              <CategoryBadge>
                <FlightTakeoff
                  style={{ fontSize: 40 }}
                  sx={{ color: '#fff' }}
                />
                Viagem
              </CategoryBadge>
              <CategoryBadge>
                <FlightTakeoff
                  style={{ fontSize: 40 }}
                  sx={{ color: '#fff' }}
                />
                Viagem
              </CategoryBadge>
              <CategoryBadge>
                <FlightTakeoff
                  style={{ fontSize: 40 }}
                  sx={{ color: '#fff' }}
                />
                Viagem
              </CategoryBadge>
            </CategoryContainer>
          </FieldCategory>
        </div>
      </>
    </FormTransaction>
  );
};
