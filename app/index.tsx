import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import MenuItem from '@/presentation/menu/MenuItem';
import ThemedView from '@/presentation/shared/ThemedView';
import { View } from 'react-native';
const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
          key={route.title}
        />
      ))}

      <View className='my-3'></View>

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
        title={route.title}
        icon={route.icon}
        name={route.name}
        isFirst={index === 0}
        isLast={index === animationMenuRoutes.length - 1}
        key={route.title}
        />
      ))}

      <View className='my-3'></View>
      
      {menuRoutes.map((route, index) => (
        <MenuItem
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
          key={route.title}
        />
      ))}
    </ThemedView>
  );
};
export default ComponentsApp;
