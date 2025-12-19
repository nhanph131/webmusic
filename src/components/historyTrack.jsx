import React from 'react';
import { List, Avatar, Typography, Space, Flex, Button } from 'antd';
import { 
  CaretRightFilled, 
  HeartFilled, 
  RetweetOutlined, 
  MessageFilled 
} from '@ant-design/icons';

const { Text, Link } = Typography;


const historyData = [
  {
    id: 1,
    artist: "R O I D .wav ✞",
    title: "Bước Za Đi Xa x Nắng Ấm Xa Dần | ...",
    plays: "326K",
    likes: "2,709",
    reposts: "35",
    comments: "19",
    image: "https://picsum.photos/id/1/60/60" 
  },
  {
    id: 2,
    artist: "Hoàng Tôn",
    title: "em còn nhớ anh không? Drill",
    plays: "103K",
    likes: "961",
    reposts: "15",
    comments: "1",
    image: "https://picsum.photos/id/2/60/60"
  },
  {
    id: 3,
    artist: "ở đây có nhạc",
    title: "Tháp Drill Tự Do x Em Còn Nhớ Anh ...",
    plays: "113K",
    likes: "1,033",
    reposts: "18",
    comments: "6",
    image: "https://picsum.photos/id/3/60/60"
  }
];

const ListeningHistory = () => {
  return (
    <div style={{ width: '100%' }}>

      <Flex justify="space-between" align="center" style={{ marginBottom: 16, paddingBottom: 8, borderBottom: '1px solid #333' }}>
        <Text strong style={{ textTransform: 'uppercase', fontSize: '12px' }}>
          Listening history
        </Text>
        <Link style={{ color: '#000', fontSize: '12px' }}>View all</Link>
      </Flex>


      <List
        itemLayout="horizontal"
        dataSource={historyData}
        split={false} 
        renderItem={(item) => (
          <List.Item style={{ padding: '8px 0', border: 'none' }}>
            <Flex gap={12} align="center" style={{ width: '100%' }}>
              
              
              <Avatar 
                shape="square" 
                size={50} 
                src={item.image} 
                style={{ minWidth: 50 }} 
              />

          
              <Flex vertical style={{ flex: 1, overflow: 'hidden' }}>
                
                <Text style={{ color: '#999', fontSize: '12px' }}>
                  {item.artist}
                </Text>
                
                
                <Text ellipsis style={{ color: '#fff', fontSize: '13px', marginBottom: 4 }}>
                  {item.title}
                </Text>

                
                <Space size={12} style={{ fontSize: '11px', color: '#999' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <CaretRightFilled style={{ fontSize: '10px' }} /> {item.plays}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <HeartFilled style={{ fontSize: '10px' }} /> {item.likes}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <RetweetOutlined style={{ fontSize: '10px' }} /> {item.reposts}
                  </span>
                   <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MessageFilled style={{ fontSize: '10px' }} /> {item.comments}
                  </span>
                </Space>
              </Flex>

            </Flex>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListeningHistory;