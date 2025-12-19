// Khi chưa có theo dõi ai thì hiển thị trang này
import { Avatar, Button, Col, Flex, Row, Space,Typography } from "antd";
import { UserOutlined, SoundOutlined } from '@ant-design/icons';
import Container from "../components/container";
import ListeningHistory from "../components/historyTrack";

const PageFeed = () => {
  const { Text } = Typography;
  const AVATAR_URL = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
  return (
    <div>
      <Container>
        
        <Row gutter={16}>
          <Col className="gutter-row" span={16}>
            <div>
          <p style={{fontSize: 26,fontWeight:600}}>Hear the latest posts from the people you’re following</p>

        </div>
        <div style={{background: "#ccc",display: "flex",alignItems:"center",flexDirection: "column"}}>
          <p style={{maxWidth: 480,textAlign: "center",fontSize: 18,fontWeight:600}}>Your feed is currently empty. Go to <a href="#">search</a>,
             <a href="#">home</a> or use the suggestions below to find creators to follow.
              Refresh the page to see tracks they are posting.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',         
            width: '100%',
            maxWidth: '450px',            
            padding: '12px 16px',
            // backgroundColor: '#1c1c1c',    
            borderRadius: '8px'
          }}>
      
            <Space size={12} align="center">
              <Avatar size={50} src={AVATAR_URL} />

              <Space direction="vertical" size={2}>
                <Text strong style={{ color: 'white', fontSize: '16px' }}>
                  AL403
                </Text>

                <Space size="middle">
                  <Text style={{ color: '#a0a0a0' }}>
                    <UserOutlined style={{ marginRight: '4px' }} /> 955
                  </Text>
                  <Text style={{ color: '#a0a0a0' }}>
                    <SoundOutlined style={{ marginRight: '4px' }} /> 27
                  </Text>
                </Space>
              </Space>
            </Space>


            <Button>Follow</Button>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',         
            width: '100%',
            maxWidth: '450px',            
            padding: '12px 16px',
            backgroundColor: '#1c1c1c',    
            borderRadius: '8px'
          }}>
      
            <Space size={12} align="center">
              <Avatar size={50} src={AVATAR_URL} />

              <Space direction="vertical" size={2}>
                <Text strong style={{ color: 'white', fontSize: '16px' }}>
                  AL403
                </Text>

                <Space size="middle">
                  <Text style={{ color: '#a0a0a0' }}>
                    <UserOutlined style={{ marginRight: '4px' }} /> 955
                  </Text>
                  <Text style={{ color: '#a0a0a0' }}>
                    <SoundOutlined style={{ marginRight: '4px' }} /> 27
                  </Text>
                </Space>
              </Space>
            </Space>


            <Button>Follow</Button>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',         
            width: '100%',
            maxWidth: '450px',            
            padding: '12px 16px',
            // backgroundColor: '#1c1c1c',    
            borderRadius: '8px'
          }}>
      
            <Space size={12} align="center">
              <Avatar size={50} src={AVATAR_URL} />

              <Space direction="vertical" size={2}>
                <Text strong style={{ color: 'white', fontSize: '16px' }}>
                  AL403
                </Text>

                <Space size="middle">
                  <Text style={{ color: '#a0a0a0' }}>
                    <UserOutlined style={{ marginRight: '4px' }} /> 955
                  </Text>
                  <Text style={{ color: '#a0a0a0' }}>
                    <SoundOutlined style={{ marginRight: '4px' }} /> 27
                  </Text>
                </Space>
              </Space>
            </Space>


            <Button>Follow</Button>
          </div>

        </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div style={{ background: "#ccc", height: '100%' }}>
               <div style={{padding: 20}}><ListeningHistory/></div>
            </div>
          </Col>
      
        </Row>
        
       

      </Container>
    </div>
  );
}
export default PageFeed;